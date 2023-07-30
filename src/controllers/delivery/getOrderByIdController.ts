import { Request, Response } from 'express';

import { ApiError } from 'core';
import { GetOrderByIdService } from 'services';
import { OrderByIdView } from 'types/dto-view';

export class GetOrderByIdController {
  constructor(private getOrderByIdService: GetOrderByIdService) {}

  async handler(req: Request, res: Response<OrderByIdView | ApiError>) {
    try {
      const response = await this.getOrderByIdService.execute(Number(req.params.id));

      res.status(response.status).json(response.data);
    } catch (e) {
      if (e instanceof ApiError) {
        res?.status(e.status).send(e);
      } else {
        throw new Error(`Unexpected error: Get OrderById`);
      }
    }
  }
}
