import { Request, Response } from 'express';

import { ApiError } from 'core';
import { GetTotalOrdersByProductService } from 'services';
import { TotalOrdersByProductView } from 'types/dto-view';

export class GetTotalOrdersByProductController {
  constructor(private getTotalOrdersByProductService: GetTotalOrdersByProductService) {}

  async handler(req: Request, res: Response<TotalOrdersByProductView | ApiError>) {
    try {
      const response = await this.getTotalOrdersByProductService.execute(
        req.params.produto
      );

      res.status(response.status).json(response.data);
    } catch (e) {
      if (e instanceof ApiError) {
        res?.status(e.status).send(e);
      } else {
        throw new Error(`Unexpected error: Get TotalOrdersByProduct`);
      }
    }
  }
}
