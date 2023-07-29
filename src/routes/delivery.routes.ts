import { Router } from 'express';

import { getAllOrdersController, postOrderController } from 'controllers/delivery';

const deliveryRouter = Router();

deliveryRouter.get(
  '/consultar-banco',
  async (request, response) => await getAllOrdersController.handler(request, response)
);

deliveryRouter.post(
  '/criar',
  async (request, response) => await postOrderController.handler(request, response)
);

export { deliveryRouter };
