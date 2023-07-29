import { DbOrders, Order } from 'types/domain';

export interface CreateOrder {
  cliente: string;
  produto: string;
  valor: number;
}

export interface UpdateOrder extends CreateOrder {
  id: number;
}

export interface OrderDbRepository {
  consultDBOrders(): DbOrders;
  findOrders(): Order[];
  findOrderById(id: string): Order;
  createOrder(order: CreateOrder): Order;
  updateOrder(order: UpdateOrder): Order;
  deleteOrder(id: string): boolean;
}
