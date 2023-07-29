import { OrderRepository } from './dbOrderRepository';
import db_orders from 'infra/repositories/db-pedidos/pedidos.json';

const dbPath = './src/infra/repositories/db-pedidos/pedidos.json';
const dbOrders = typeof db_orders === 'string' ? JSON.parse(db_orders) : db_orders;

const orderRepository = new OrderRepository(dbOrders, dbPath);

export { orderRepository, OrderRepository };
