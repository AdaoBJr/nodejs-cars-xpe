import { orderRepository } from 'infra';
import { PutOrderService } from './putOrderService';
import { PostOrderService } from './postOrderService';
import { DeleteOrderService } from './deleteOrderService';
import { GetOrderByIdService } from './getOrderByIdService';
import { GetAllOrdersService } from './getAllOrdersService';
import { GetMoreOrdersService } from './getMoreOrdersService';
import { GetTotalOrdersByClientService } from './getTotalOrdersByClientService';
import { GetTotalOrdersByProductService } from './getTotalOrdersByProductService';

const putOrderService = new PutOrderService(orderRepository);
const postOrderService = new PostOrderService(orderRepository);
const deleteOrderService = new DeleteOrderService(orderRepository);
const getOrderByIdService = new GetOrderByIdService(orderRepository);
const getAllOrdersService = new GetAllOrdersService(orderRepository);
const getMoreOrdersService = new GetMoreOrdersService(orderRepository);
const getTotalOrdersByClientService = new GetTotalOrdersByClientService(orderRepository);
const getTotalOrdersByProductService = new GetTotalOrdersByProductService(
  orderRepository
);

export {
  putOrderService,
  postOrderService,
  deleteOrderService,
  getOrderByIdService,
  getAllOrdersService,
  getMoreOrdersService,
  getTotalOrdersByClientService,
  getTotalOrdersByProductService,
  PutOrderService,
  PostOrderService,
  DeleteOrderService,
  GetOrderByIdService,
  GetAllOrdersService,
  GetMoreOrdersService,
  GetTotalOrdersByClientService,
  GetTotalOrdersByProductService,
};
