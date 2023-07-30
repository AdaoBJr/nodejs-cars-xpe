import fs from 'fs';

import { DbOrders, Order } from 'types/domain';
import { getOrderById, getAvaliableId, removeOrderById } from 'core';
import { CreateOrder, OrderDbRepository, UpdateOrder } from '../types';

class OrderRepository implements OrderDbRepository {
  constructor(private dbOrders: DbOrders, private dbPath: string) {}

  consultDBOrders(): DbOrders {
    const dbOrders = {
      ...this.dbOrders,
      pedidos: this.dbOrders.pedidos.sort((a, b) => b.id - a.id),
    };
    return dbOrders;
  }

  findOrders(): Order[] {
    throw new Error('Method not implemented.');
  }
  findOrderById(id: number): Order {
    throw new Error('Method not implemented.');
  }
  createOrder({ cliente, produto, valor }: CreateOrder): Order {
    const avaliableId = getAvaliableId(this.dbOrders);
    const newOrder: Order = {
      id: avaliableId,
      cliente,
      produto,
      valor,
      entregue: false,
      timestamp: new Date().toISOString(),
    };

    const newDbOrders: DbOrders = {
      nextId: avaliableId + 1,
      pedidos: [...this.dbOrders.pedidos, newOrder],
    };

    //salvando no banco
    fs.writeFile(this.dbPath, JSON.stringify(newDbOrders), 'utf-8', (err) => {
      if (err) console.error('Erro ao salvar o arquivo:', err);
    });

    return newOrder;
  }

  updateOrder(id: number, order: UpdateOrder): Order | null {
    const currentOrder = getOrderById(id, this.dbOrders);
    if (!currentOrder) return null;

    const updatedOrder = {
      ...currentOrder,
      ...order,
    };

    const updatedOrders = [...removeOrderById(id, this.dbOrders.pedidos), updatedOrder];

    const updatedDbOrders: DbOrders = {
      nextId: this.dbOrders.nextId,
      pedidos: updatedOrders,
    };

    //salvando no banco
    fs.writeFile(this.dbPath, JSON.stringify(updatedDbOrders), 'utf-8', (err) => {
      if (err) console.error('Erro ao salvar o arquivo:', err);
    });

    return updatedOrder;
  }

  deleteOrder(id: number): boolean | null {
    const currentOrder = getOrderById(id, this.dbOrders);
    if (!currentOrder) return null;

    const removedDbOrders: DbOrders = {
      nextId: this.dbOrders.nextId - 1,
      pedidos: removeOrderById(id, this.dbOrders.pedidos),
    };

    //salvando no banco
    fs.writeFile(this.dbPath, JSON.stringify(removedDbOrders), 'utf-8', (err) => {
      if (err) {
        console.error('Erro ao salvar o arquivo:', err);
        return false;
      }
    });

    return !!removedDbOrders;
  }
}

export { OrderRepository };
