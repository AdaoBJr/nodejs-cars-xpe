import { Request, Response } from 'express';

import { ApiError } from 'core';
import { DeleteOrderService } from 'services';
import { DeleteOrderView } from 'types/dto-view';

export class DeleteOrderController {
  constructor(private deleteOrderService: DeleteOrderService) {}

  async handler(req: Request, res: Response<DeleteOrderView | ApiError>) {
    try {
      const response = await this.deleteOrderService.execute(Number(req.params.id));

      res.status(response.status).json(response.data);
    } catch (e) {
      if (e instanceof ApiError) {
        res?.status(e.status).send(e);
      } else {
        throw new Error(`Unexpected error: Delete Order`);
      }
    }
  }
}
