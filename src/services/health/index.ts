import { healthRepository } from 'infra';
import { GetHealthService } from './getHealthService';

const getHealthService = new GetHealthService(healthRepository);

export { getHealthService, GetHealthService };
