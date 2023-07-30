import { orderRepository } from 'infra';
import { PutOrderService } from './putOrderService';
import { PostOrderService } from './postOrderService';
import { DeleteOrderService } from './deleteOrderService';
import { GetOrderByIdService } from './getOrderByIdService';
import { GetAllOrdersService } from './getAllOrdersService';
import { GetMoreOrdersService } from './getMoreOrdersService';
import { GetTotalOrdersByClientService } from './getTotalOrdersByClientService';

const putOrderService = new PutOrderService(orderRepository);
const postOrderService = new PostOrderService(orderRepository);
const deleteOrderService = new DeleteOrderService(orderRepository);
const getOrderByIdService = new GetOrderByIdService(orderRepository);
const getAllOrdersService = new GetAllOrdersService(orderRepository);
const getMoreOrdersService = new GetMoreOrdersService(orderRepository);
const getTotalOrdersByClientService = new GetTotalOrdersByClientService(orderRepository);

export {
  putOrderService,
  postOrderService,
  deleteOrderService,
  getOrderByIdService,
  getAllOrdersService,
  getMoreOrdersService,
  getTotalOrdersByClientService,
  PutOrderService,
  PostOrderService,
  DeleteOrderService,
  GetOrderByIdService,
  GetAllOrdersService,
  GetMoreOrdersService,
  GetTotalOrdersByClientService,
};
