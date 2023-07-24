import { ApiError } from './api-error';

export class Api401Error extends ApiError {
  constructor(protected messageCustom?: string) {
    super(messageCustom, 'Unauthorized', 401, 'Usuário não autenticado');
  }
}
