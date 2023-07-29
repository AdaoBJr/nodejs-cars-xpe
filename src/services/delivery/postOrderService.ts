import { CreateOrder, OrderDbRepository } from 'infra';
import { HttpStatusCode } from 'core/protocols';
import { OrderMapper } from 'types/dto-mapper';
import { apiErrorHandler } from 'core';

export interface ExecuteProps extends CreateOrder {}

export class PostOrderService {
  constructor(private orderRepository: OrderDbRepository) {}

  async execute(order: ExecuteProps): Promise<OrderMapper> {
    if (!Object.values(order).every((item) => item))
      throw apiErrorHandler({
        throwStatus: 400,
        messageCustom: 'Dados para a criação do pedido não enviados.',
      });

    const data = this.orderRepository.createOrder(order);

    //se tiver lógica usar esse local.

    return {
      status: HttpStatusCode.created,
      data,
    };
  }
}
