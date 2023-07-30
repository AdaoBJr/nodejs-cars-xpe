import { apiErrorHandler } from 'core';
import { OrderDbRepository } from 'infra';
import { HttpStatusCode } from 'core/protocols';
import { MoreOrdersMapper } from 'types/dto-mapper';

export class GetMoreOrdersService {
  constructor(private orderRepository: OrderDbRepository) {}

  async execute(): Promise<MoreOrdersMapper> {
    const orders = this.orderRepository.findOrders();
    const ordersMoreRequests = orders.reduce(
      (acc: { [produto: string]: number }, curr) => {
        if (curr.entregue) {
          acc[curr.produto] = (acc[curr.produto] || 0) + 1;
        }
        return acc;
      },
      {}
    );

    const data = Object.keys(ordersMoreRequests)
      .map((pedido) => ({
        pedido,
        total: ordersMoreRequests[pedido],
        entregue: true,
      }))
      .sort((a, b) => b.total - a.total);

    if (!Object.values(ordersMoreRequests).length)
      throw apiErrorHandler({
        throwStatus: HttpStatusCode.notFound,
      });

    return {
      status: HttpStatusCode.ok,
      data,
    };
  }
}
