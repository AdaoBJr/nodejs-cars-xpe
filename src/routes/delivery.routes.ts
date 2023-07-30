import { Router } from 'express';

import {
  putOrderController,
  postOrderController,
  deleteOrderController,
  getAllOrdersController,
} from 'controllers/delivery';

const deliveryRouter = Router();

deliveryRouter.get(
  '/consultar-banco',
  async (request, response) => await getAllOrdersController.handler(request, response)
);

deliveryRouter.post(
  '/criar',
  async (request, response) => await postOrderController.handler(request, response)
);

deliveryRouter.put(
  '/atualizar/:id',
  async (request, response) => await putOrderController.handler(request, response)
);

deliveryRouter.delete(
  '/deletar/:id',
  async (request, response) => await deleteOrderController.handler(request, response)
);

export { deliveryRouter };
