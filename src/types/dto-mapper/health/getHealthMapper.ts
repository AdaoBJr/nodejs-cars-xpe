import { ApiError } from 'core';
import { Health } from 'types/domain';
import { HttpStatusCode } from 'core/protocols';

export interface HealthMapper {
  status: HttpStatusCode;
  data: Health | ApiError;
}
