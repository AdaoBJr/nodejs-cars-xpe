import { Order } from 'types/domain';
import { HttpStatusCode } from 'core/protocols';

export interface MoreOrders {
  pedido: Order['produto'];
  total: number;
  entregue: boolean;
}

export interface MoreOrdersMapper {
  status: HttpStatusCode;
  data: MoreOrders[];
}
