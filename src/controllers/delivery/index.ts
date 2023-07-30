import { putOrderService, postOrderService, getAllOrdersService } from 'services';
import { PutOrderController } from './putOrderController';
import { PostOrderController } from './postOrderController';
import { GetAllOrdersController } from './getAllOrdersController';

const putOrderController = new PutOrderController(putOrderService);
const postOrderController = new PostOrderController(postOrderService);
const getAllOrdersController = new GetAllOrdersController(getAllOrdersService);

export { putOrderController, postOrderController, getAllOrdersController };
