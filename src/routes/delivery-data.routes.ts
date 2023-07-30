import { Router } from 'express';

import {
  getOrderByIdController,
  getAllOrdersController,
  getMoreOrdersController,
  getTotalOrdersByClientController,
  getTotalOrdersByProductController,
} from 'controllers/delivery';

const deliveryDataRouter = Router();

deliveryDataRouter.get(
  '/consultar-banco',
  async (request, response) => await getAllOrdersController.handler(request, response)
);

deliveryDataRouter.get(
  '/pedido/:id',
  async (request, response) => await getOrderByIdController.handler(request, response)
);

deliveryDataRouter.get(
  '/total/cliente/:cliente',
  async (request, response) =>
    await getTotalOrdersByClientController.handler(request, response)
);

deliveryDataRouter.get(
  '/total/produto/:produto',
  async (request, response) =>
    await getTotalOrdersByProductController.handler(request, response)
);

deliveryDataRouter.get(
  '/produtos-mais-solicitados',
  async (request, response) => await getMoreOrdersController.handler(request, response)
);

export { deliveryDataRouter };
