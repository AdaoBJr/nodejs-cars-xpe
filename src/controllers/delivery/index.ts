import {
  putOrderService,
  postOrderService,
  getOrderByIdService,
  getAllOrdersService,
  deleteOrderService,
} from 'services';
import { PutOrderController } from './putOrderController';
import { PostOrderController } from './postOrderController';
import { DeleteOrderController } from './deleteOrderController';
import { GetOrderByIdController } from './getOrderByIdController';
import { GetAllOrdersController } from './getAllOrdersController';

const putOrderController = new PutOrderController(putOrderService);
const postOrderController = new PostOrderController(postOrderService);
const deleteOrderController = new DeleteOrderController(deleteOrderService);
const getOrderByIdController = new GetOrderByIdController(getOrderByIdService);
const getAllOrdersController = new GetAllOrdersController(getAllOrdersService);

export {
  putOrderController,
  postOrderController,
  deleteOrderController,
  getOrderByIdController,
  getAllOrdersController,
};
