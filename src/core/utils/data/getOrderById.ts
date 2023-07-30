import { DbOrders } from 'types/domain';

export const getOrderById = (id: number, dbOrders: DbOrders) =>
  dbOrders.pedidos.find((order) => order.id === id);
