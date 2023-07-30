import {
  putOrderService,
  postOrderService,
  getAllOrdersService,
  deleteOrderService,
} from 'services';
import { PutOrderController } from './putOrderController';
import { PostOrderController } from './postOrderController';
import { DeleteOrderController } from './deleteOrderController';
import { GetAllOrdersController } from './getAllOrdersController';

const putOrderController = new PutOrderController(putOrderService);
const postOrderController = new PostOrderController(postOrderService);
const deleteOrderController = new DeleteOrderController(deleteOrderService);
const getAllOrdersController = new GetAllOrdersController(getAllOrdersService);

export {
  putOrderController,
  postOrderController,
  deleteOrderController,
  getAllOrdersController,
};
