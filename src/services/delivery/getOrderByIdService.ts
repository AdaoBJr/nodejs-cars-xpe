import { apiErrorHandler } from 'core';
import { HttpStatusCode } from 'core/protocols';
import { UpdateOrderMapper } from 'types/dto-mapper';
import { OrderDbRepository, UpdateOrder } from 'infra';

export class GetOrderByIdService {
  constructor(private orderRepository: OrderDbRepository) {}

  async execute(id: number): Promise<UpdateOrderMapper> {
    if (!id)
      throw apiErrorHandler({
        throwStatus: 400,
        messageCustom: 'Id do pedido não enviado.',
      });

    const data = this.orderRepository.findOrderById(id);

    if (!data)
      throw apiErrorHandler({
        throwStatus: HttpStatusCode.notFound,
      });

    return {
      status: HttpStatusCode.ok,
      data,
    };
  }
}
