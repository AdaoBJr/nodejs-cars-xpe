import { ApiError } from 'core';
import { Order } from 'types/domain';
import { HttpStatusCode } from 'core/protocols';

export interface TotalOrderByProduct {
  produto: Order['produto'];
  total: number;
  moeda: 'R$' | 'USD';
}

export interface TotalOrdersByProductMapper {
  status: HttpStatusCode;
  data: TotalOrderByProduct | ApiError;
}
