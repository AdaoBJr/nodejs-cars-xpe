import { Request, Response } from 'express';

import { ApiError } from 'core';
import { GetTotalOrdersByClientService } from 'services';
import { TotalOrdersByClientView } from 'types/dto-view';

export class GetTotalOrdersByClientController {
  constructor(private getTotalOrdersByClientService: GetTotalOrdersByClientService) {}

  async handler(req: Request, res: Response<TotalOrdersByClientView | ApiError>) {
    try {
      const response = await this.getTotalOrdersByClientService.execute(
        req.params.cliente
      );

      res.status(response.status).json(response.data);
    } catch (e) {
      if (e instanceof ApiError) {
        res?.status(e.status).send(e);
      } else {
        throw new Error(`Unexpected error: Get TotalOrdersByClient`);
      }
    }
  }
}
