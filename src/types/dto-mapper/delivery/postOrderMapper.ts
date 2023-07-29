import { ApiError } from 'core';
import { Order } from 'types/domain';
import { HttpStatusCode } from 'core/protocols';

export interface OrderMapper {
  status: HttpStatusCode;
  data: Order | ApiError;
}
