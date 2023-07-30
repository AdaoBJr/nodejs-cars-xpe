import {
  putOrderService,
  postOrderService,
  deleteOrderService,
  getOrderByIdService,
  getAllOrdersService,
  getMoreOrdersService,
  getTotalOrdersByClientService,
  getTotalOrdersByProductService,
} from 'services';
import { PutOrderController } from './putOrderController';
import { PostOrderController } from './postOrderController';
import { DeleteOrderController } from './deleteOrderController';
import { GetOrderByIdController } from './getOrderByIdController';
import { GetAllOrdersController } from './getAllOrdersController';
import { GetMoreOrdersController } from './getMoreOrdersController';
import { GetTotalOrdersByClientController } from './getTotalOrdersByClientController';
import { GetTotalOrdersByProductController } from './getTotalOrdersByProductController';

const putOrderController = new PutOrderController(putOrderService);
const postOrderController = new PostOrderController(postOrderService);
const deleteOrderController = new DeleteOrderController(deleteOrderService);
const getOrderByIdController = new GetOrderByIdController(getOrderByIdService);
const getAllOrdersController = new GetAllOrdersController(getAllOrdersService);
const getMoreOrdersController = new GetMoreOrdersController(getMoreOrdersService);
const getTotalOrdersByClientController = new GetTotalOrdersByClientController(
  getTotalOrdersByClientService
);
const getTotalOrdersByProductController = new GetTotalOrdersByProductController(
  getTotalOrdersByProductService
);

export {
  putOrderController,
  postOrderController,
  deleteOrderController,
  getOrderByIdController,
  getAllOrdersController,
  getMoreOrdersController,
  getTotalOrdersByClientController,
  getTotalOrdersByProductController,
};
