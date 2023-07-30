import { Request, Response } from 'express';

import { ApiError } from 'core';
import { PutOrderService } from 'services';

import { UpdateOrderView } from 'types/dto-view';
import { UpdateOrderClient } from 'types/dto-client';

export class PutOrderController {
  constructor(private putOrderService: PutOrderService) {}

  async handler(
    req: Request<any, UpdateOrderClient>,
    res: Response<UpdateOrderView | ApiError>
  ) {
    try {
      const response = await this.putOrderService.execute({
        id: Number(req.params.id),
        ...req.body,
      });

      res.status(response.status).json(response.data);
    } catch (e) {
      if (e instanceof ApiError) {
        res?.status(e.status).send(e);
      } else {
        throw new Error(`Unexpected error: Put Order`);
      }
    }
  }
}
