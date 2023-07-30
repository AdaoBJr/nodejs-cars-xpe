import { Router } from 'express';

import {
  putOrderController,
  postOrderController,
  deleteOrderController,
} from 'controllers/delivery';

const deliveryPedidoRouter = Router();

deliveryPedidoRouter.post(
  '/criar',
  async (request, response) => await postOrderController.handler(request, response)
);

deliveryPedidoRouter.put(
  '/atualizar/:id',
  async (request, response) => await putOrderController.handler(request, response)
);

deliveryPedidoRouter.delete(
  '/deletar/:id',
  async (request, response) => await deleteOrderController.handler(request, response)
);

export { deliveryPedidoRouter };
