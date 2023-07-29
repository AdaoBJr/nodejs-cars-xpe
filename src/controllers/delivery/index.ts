import { postOrderService, getAllOrdersService } from 'services';
import { PostOrderController } from './postOrderController';
import { GetAllOrdersController } from './getAllOrdersController';

const postOrderController = new PostOrderController(postOrderService);
const getAllOrdersController = new GetAllOrdersController(getAllOrdersService);

export { postOrderController, getAllOrdersController };
