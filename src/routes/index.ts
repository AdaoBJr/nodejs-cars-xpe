import { Router } from 'express';
import { healthRouter } from './health.routes';
import { deliveryRouter } from './delivery.routes';

const router = Router();

router.use('/health', healthRouter);
router.use('/pedido', deliveryRouter);

export { router };
