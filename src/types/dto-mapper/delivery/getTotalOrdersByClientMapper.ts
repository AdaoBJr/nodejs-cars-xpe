import { ApiError } from 'core';
import { Order } from 'types/domain';
import { HttpStatusCode } from 'core/protocols';

export interface TotalOrderByClient {
  cliente: Order['cliente'];
  total: number;
  moeda: 'R$' | 'USD';
}

export interface TotalOrdersByClientMapper {
  status: HttpStatusCode;
  data: TotalOrderByClient | ApiError;
}
