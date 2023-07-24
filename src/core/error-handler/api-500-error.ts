import { ApiError } from './api-error';

export class Api500Error extends ApiError {
  constructor(protected messageCustom?: string) {
    super(messageCustom, 'Unexpected', 500, 'Erro inesperado');
  }
}
