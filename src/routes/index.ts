import { Router } from 'express';
import { healthRouter } from './health.routes';
import { deliveryPedidoRouter } from './delivery-pedido.routes';
import { deliveryDataRouter } from './delivery-data.routes';

const router = Router();

router.use('/health', healthRouter);
router.use('/dados', deliveryDataRouter);
router.use('/pedido', deliveryPedidoRouter);

export { router };
