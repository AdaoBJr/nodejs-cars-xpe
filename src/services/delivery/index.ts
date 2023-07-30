import { orderRepository } from 'infra';
import { PutOrderService } from './putOrderService';
import { PostOrderService } from './postOrderService';
import { GetAllOrdersService } from './getAllOrdersService';

const putOrderService = new PutOrderService(orderRepository);
const postOrderService = new PostOrderService(orderRepository);
const getAllOrdersService = new GetAllOrdersService(orderRepository);

export {
  putOrderService,
  postOrderService,
  getAllOrdersService,
  PutOrderService,
  PostOrderService,
  GetAllOrdersService,
};
