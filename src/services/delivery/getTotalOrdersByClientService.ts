import { apiErrorHandler } from 'core';
import { OrderDbRepository } from 'infra';
import { HttpStatusCode } from 'core/protocols';
import { TotalOrdersByClientMapper } from 'types/dto-mapper';

export class GetTotalOrdersByClientService {
  constructor(private orderRepository: OrderDbRepository) {}

  async execute(client: string): Promise<TotalOrdersByClientMapper> {
    if (!client)
      throw apiErrorHandler({
        throwStatus: 400,
        messageCustom: 'Nome do cliente não enviado.',
      });

    const orders = this.orderRepository.findOrders();
    const ordersByClient = orders.filter((order) => order.cliente === client);

    if (!ordersByClient.length)
      throw apiErrorHandler({
        throwStatus: HttpStatusCode.notFound,
      });

    const totalOrdersValue = ordersByClient.reduce((acc, curr) => {
      if (curr.entregue) return acc + curr.valor;
      return acc;
    }, 0);

    return {
      status: HttpStatusCode.ok,
      data: {
        cliente: client,
        total: totalOrdersValue,
        moeda: 'R$',
      },
    };
  }
}
