import { orderRepository } from 'infra';
import { PutOrderService } from './putOrderService';
import { PostOrderService } from './postOrderService';
import { DeleteOrderService } from './deleteOrderService';
import { GetOrderByIdService } from './getOrderByIdService';
import { GetAllOrdersService } from './getAllOrdersService';

const putOrderService = new PutOrderService(orderRepository);
const deleteOrderService = new DeleteOrderService(orderRepository);
const postOrderService = new PostOrderService(orderRepository);
const getOrderByIdService = new GetOrderByIdService(orderRepository);
const getAllOrdersService = new GetAllOrdersService(orderRepository);

export {
  putOrderService,
  postOrderService,
  deleteOrderService,
  getOrderByIdService,
  getAllOrdersService,
  PutOrderService,
  PostOrderService,
  DeleteOrderService,
  GetOrderByIdService,
  GetAllOrdersService,
};
