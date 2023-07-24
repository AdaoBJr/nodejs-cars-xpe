import { ApiError } from './api-error';

export class Api404Error extends ApiError {
  constructor(protected messageCustom?: string) {
    super(messageCustom, 'Not found', 404, 'Item não encontrado');
  }
}
