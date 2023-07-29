import { DbOrders } from 'types/domain';

export const getAvaliableId = (dbOrders: DbOrders) => {
  const currentId = Math.max(...dbOrders.pedidos.map(({ id }) => id));
  return currentId + 1; //Id Disponível para próximo armazenamento.
};
