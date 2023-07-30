import { OrderDbRepository } from 'infra';
import { HttpStatusCode } from 'core/protocols';
import { AllOrdersMapper } from 'types/dto-mapper';

export class GetAllOrdersService {
  constructor(private orderRepository: OrderDbRepository) {}

  async execute(): Promise<AllOrdersMapper> {
    const data = this.orderRepository.consultDBOrders();

    return {
      status: HttpStatusCode.ok,
      data,
    };
  }
}
