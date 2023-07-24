import { ApiError } from '../api-error';
import { Api400Error } from '../api-400-error';
import { Api401Error } from '../api-401-error';
import { Api403Error } from '../api-403-error';
import { Api404Error } from '../api-404-error';
import { Api500Error } from '../api-500-error';
import { HttpStatusCode } from 'core/protocols';

export const apiErrorsType: Record<
  HttpStatusCode | number,
  (message?: string) => ApiError
> = {
  [HttpStatusCode.badRequest]: (message?: string) => new Api400Error(message),

  [HttpStatusCode.notAuthenticated]: (message?: string) => new Api401Error(message),

  [HttpStatusCode.forbidden]: (message?: string) => new Api403Error(message),

  [HttpStatusCode.notFound]: (message?: string) => new Api404Error(message),

  [HttpStatusCode.serverError]: (message?: string) => new Api500Error(message),
};
