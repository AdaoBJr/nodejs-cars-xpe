import { HealthDbRepository } from '../types';

class HealthRepository implements HealthDbRepository {
  async findHealth() {
    const RESPONSE_TIME = 1000;
    await new Promise((resolve) => setTimeout(resolve, RESPONSE_TIME));

    return {
      message: 'Está aplicação está rodando corretamente.',
    };
  }
}

export { HealthRepository };
