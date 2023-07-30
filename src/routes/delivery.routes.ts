import { Router } from 'express';

import {
  putOrderController,
  postOrderController,
  deleteOrderController,
  getOrderByIdController,
  getAllOrdersController,
  getTotalOrdersByClientController,
} from 'controllers/delivery';

const deliveryRouter = Router();

deliveryRouter.get(
  '/consultar-banco',
  async (request, response) => await getAllOrdersController.handler(request, response)
);

deliveryRouter.get(
  '/:id',
  async (request, response) => await getOrderByIdController.handler(request, response)
);

deliveryRouter.post(
  '/criar',
  async (request, response) => await postOrderController.handler(request, response)
);

deliveryRouter.put(
  '/atualizar/:id',
  async (request, response) => await putOrderController.handler(request, response)
);

deliveryRouter.get(
  '/total/:cliente',
  async (request, response) =>
    await getTotalOrdersByClientController.handler(request, response)
);

deliveryRouter.delete(
  '/deletar/:id',
  async (request, response) => await deleteOrderController.handler(request, response)
);

export { deliveryRouter };
