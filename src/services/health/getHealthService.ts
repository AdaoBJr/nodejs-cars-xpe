import { HealthRepository } from 'infra';
import { HttpStatusCode } from 'core/protocols';
import { HealthMapper } from 'types/dto-mapper';

export class GetHealthService {
  constructor(private healthRepository: HealthRepository) {}

  async execute(): Promise<HealthMapper> {
    const data = await this.healthRepository.findHealth();

    //se tiver lógica usar esse local.

    return {
      status: HttpStatusCode.ok,
      data,
    };
  }
}
