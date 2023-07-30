import { apiErrorHandler } from 'core';
import { OrderDbRepository } from 'infra';
import { HttpStatusCode } from 'core/protocols';
import { DeleteOrderMapper } from 'types/dto-mapper';

export class DeleteOrderService {
  constructor(private orderRepository: OrderDbRepository) {}

  async execute(id: number): Promise<DeleteOrderMapper> {
    if (!id)
      throw apiErrorHandler({
        throwStatus: 400,
        messageCustom: 'Id do pedido não enviado.',
      });

    const data = this.orderRepository.deleteOrder(id);

    if (data === null)
      throw apiErrorHandler({
        throwStatus: HttpStatusCode.notFound,
      });

    return {
      status: HttpStatusCode.created,
      data,
    };
  }
}
