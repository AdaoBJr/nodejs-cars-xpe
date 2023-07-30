import {
  putOrderService,
  postOrderService,
  deleteOrderService,
  getOrderByIdService,
  getAllOrdersService,
  getTotalOrdersByClientService,
} from 'services';
import { PutOrderController } from './putOrderController';
import { PostOrderController } from './postOrderController';
import { DeleteOrderController } from './deleteOrderController';
import { GetOrderByIdController } from './getOrderByIdController';
import { GetAllOrdersController } from './getAllOrdersController';
import { GetTotalOrdersByClientController } from './getTotalOrdersByClientController';

const putOrderController = new PutOrderController(putOrderService);
const postOrderController = new PostOrderController(postOrderService);
const deleteOrderController = new DeleteOrderController(deleteOrderService);
const getOrderByIdController = new GetOrderByIdController(getOrderByIdService);
const getAllOrdersController = new GetAllOrdersController(getAllOrdersService);
const getTotalOrdersByClientController = new GetTotalOrdersByClientController(
  getTotalOrdersByClientService
);

export {
  putOrderController,
  postOrderController,
  deleteOrderController,
  getOrderByIdController,
  getAllOrdersController,
  getTotalOrdersByClientController,
};
