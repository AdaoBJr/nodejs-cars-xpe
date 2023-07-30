import { apiErrorHandler } from 'core';
import { OrderDbRepository } from 'infra';
import { HttpStatusCode } from 'core/protocols';
import { TotalOrdersByProductMapper } from 'types/dto-mapper';

export class GetTotalOrdersByProductService {
  constructor(private orderRepository: OrderDbRepository) {}

  async execute(product: string): Promise<TotalOrdersByProductMapper> {
    if (!product)
      throw apiErrorHandler({
        throwStatus: 400,
        messageCustom: 'Nome do produto não enviado.',
      });

    const orders = this.orderRepository.findOrders();
    const ordersByProduct = orders.filter((order) => order.produto === product);

    if (!ordersByProduct.length)
      throw apiErrorHandler({
        throwStatus: HttpStatusCode.notFound,
      });

    const totalOrdersValue = ordersByProduct.reduce((acc, curr) => {
      if (curr.entregue) return acc + curr.valor;
      return acc;
    }, 0);

    return {
      status: HttpStatusCode.ok,
      data: {
        produto: product,
        total: totalOrdersValue,
        moeda: 'R$',
      },
    };
  }
}
