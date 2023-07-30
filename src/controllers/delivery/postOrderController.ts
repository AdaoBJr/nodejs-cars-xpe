import { Request, Response } from 'express';

import { ApiError } from 'core';
import { PostOrderService } from 'services';

import { CreateOrderView } from 'types/dto-view';
import { CreateOrderClient } from 'types/dto-client';

export class PostOrderController {
  constructor(private postOrderService: PostOrderService) {}

  async handler(
    req: Request<any, CreateOrderClient>,
    res: Response<CreateOrderView | ApiError>
  ) {
    try {
      const response = await this.postOrderService.execute(req.body);

      res.status(response.status).json(response.data);
    } catch (e) {
      if (e instanceof ApiError) {
        res?.status(e.status).send(e);
      } else {
        throw new Error(`Unexpected error: Post Order`);
      }
    }
  }
}
