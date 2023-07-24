import { ApiError } from './api-error';

export class Api400Error extends ApiError {
  constructor(protected messageCustom?: string) {
    super(messageCustom, 'Bad Request', 400, 'Requisição feita de maneira incorreta');
  }
}
