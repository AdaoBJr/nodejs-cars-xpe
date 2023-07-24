import { Router } from 'express';

import { getHealthController } from 'controllers/health';

const healthRouter = Router();

healthRouter.get(
  '/',
  async (request, response) => await getHealthController.handler(request, response)
);

export { healthRouter };
