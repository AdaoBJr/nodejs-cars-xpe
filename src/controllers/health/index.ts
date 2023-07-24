import { getHealthService } from 'services';
import { GetHealthController } from './getHealthController';

const getHealthController = new GetHealthController(getHealthService);

export { getHealthController, GetHealthController };
