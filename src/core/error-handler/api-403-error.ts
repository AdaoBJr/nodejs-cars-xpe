import { ApiError } from './api-error';

export class Api403Error extends ApiError {
  constructor(protected messageCustom?: string) {
    super(messageCustom, 'Forbidden', 403, 'Usuário não autorizado');
  }
}
