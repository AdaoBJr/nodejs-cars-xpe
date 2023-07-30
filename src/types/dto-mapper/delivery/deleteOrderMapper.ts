import { ApiError } from 'core';
import { HttpStatusCode } from 'core/protocols';

export interface DeleteOrderMapper {
  status: HttpStatusCode;
  data: boolean | ApiError;
}
