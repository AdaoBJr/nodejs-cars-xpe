import { orderRepository } from 'infra';
import { PostOrderService } from './postOrderService';
import { GetAllOrdersService } from './getAllOrdersService';

const postOrderService = new PostOrderService(orderRepository);
const getAllOrdersService = new GetAllOrdersService(orderRepository);

export { postOrderService, getAllOrdersService, PostOrderService, GetAllOrdersService };
