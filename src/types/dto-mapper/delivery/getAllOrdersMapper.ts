import { ApiError } from 'core';
import { DbOrders } from 'types/domain';
import { HttpStatusCode } from 'core/protocols';

export interface AllOrdersMapper {
  status: HttpStatusCode;
  data: DbOrders | ApiError;
}
