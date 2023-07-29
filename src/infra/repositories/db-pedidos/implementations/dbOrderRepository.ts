import fs from 'fs';

import { getAvaliableId } from 'core';
import { DbOrders, Order } from 'types/domain';
import { CreateOrder, OrderDbRepository, UpdateOrder } from '../types';

class OrderRepository implements OrderDbRepository {
  constructor(private dbOrders: DbOrders, private dbPath: string) {}

  consultDBOrders(): DbOrders {
    return this.dbOrders;
  }

  findOrders(): Order[] {
    throw new Error('Method not implemented.');
  }
  findOrderById(id: string): Order {
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

    const currentDbOrders: DbOrders = {
      nextId: avaliableId + 1,
      pedidos: [...this.dbOrders.pedidos, newOrder],
    };

    //salvando no banco
    fs.writeFile(this.dbPath, JSON.stringify(currentDbOrders), 'utf-8', (err) => {
      if (err) console.error('Erro ao salvar o arquivo:', err);
    });

    return newOrder;
  }
  updateOrder(order: UpdateOrder): Order {
    throw new Error('Method not implemented.');
  }
  deleteOrder(id: string): boolean {
    throw new Error('Method not implemented.');
  }
}

export { OrderRepository };
