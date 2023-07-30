import { orderRepository } from 'infra';
import { PutOrderService } from './putOrderService';
import { PostOrderService } from './postOrderService';
import { DeleteOrderService } from './deleteOrderService';
import { GetAllOrdersService } from './getAllOrdersService';

const putOrderService = new PutOrderService(orderRepository);
const deleteOrderService = new DeleteOrderService(orderRepository);
const postOrderService = new PostOrderService(orderRepository);
const getAllOrdersService = new GetAllOrdersService(orderRepository);

export {
  putOrderService,
  postOrderService,
  deleteOrderService,
  getAllOrdersService,
  PutOrderService,
  PostOrderService,
  DeleteOrderService,
  GetAllOrdersService,
};
