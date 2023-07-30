import { DbOrders, Order } from 'types/domain';

export interface CreateOrder {
  cliente: string;
  produto: string;
  valor: number;
}

export interface UpdateOrder extends CreateOrder {
  entregue: boolean;
}

export interface OrderDbRepository {
  consultDBOrders(): DbOrders;
  findOrders(): Order[];
  findOrderById(id: number): Order | null;
  createOrder(order: CreateOrder): Order;
  updateOrder(id: number, order: UpdateOrder): Order | null;
  deleteOrder(id: number): boolean | null;
}
