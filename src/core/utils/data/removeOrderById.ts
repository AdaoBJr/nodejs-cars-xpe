import { DbOrders } from 'types/domain';

export const removeOrderById = (id: number, pedidos: DbOrders['pedidos']) =>
  pedidos.filter((order) => order.id !== id).sort((a, b) => a.id - b.id);
