import { apiErrorHandler } from 'core';
import { HttpStatusCode } from 'core/protocols';
import { UpdateOrderMapper } from 'types/dto-mapper';
import { OrderDbRepository, UpdateOrder } from 'infra';

export interface ExecuteProps extends UpdateOrder {
  id: number;
}

export class PutOrderService {
  constructor(private orderRepository: OrderDbRepository) {}

  async execute({ id, ...rest }: ExecuteProps): Promise<UpdateOrderMapper> {
    if (!Object.values({ id }).every((item) => item))
      throw apiErrorHandler({
        throwStatus: 400,
        messageCustom: 'Id do pedido não enviado.',
      });

    const data = this.orderRepository.updateOrder(id, rest);

    if (!data)
      throw apiErrorHandler({
        throwStatus: HttpStatusCode.notFound,
      });

    return {
      status: HttpStatusCode.created,
      data,
    };
  }
}
