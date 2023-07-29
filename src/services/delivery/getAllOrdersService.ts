import { OrderDbRepository } from 'infra';
import { HttpStatusCode } from 'core/protocols';
import { AllOrdersMapper } from 'types/dto-mapper';

export class GetAllOrdersService {
  constructor(private orderRepository: OrderDbRepository) {}

  async execute(): Promise<AllOrdersMapper> {
    const data = this.orderRepository.consultDBOrders();

    //se tiver lógica usar esse local.

    return {
      status: HttpStatusCode.ok,
      data,
    };
  }
}
