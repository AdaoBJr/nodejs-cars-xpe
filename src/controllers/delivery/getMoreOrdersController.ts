import { Request, Response } from 'express';

import { ApiError } from 'core';
import { GetMoreOrdersService } from 'services';
import { MoreOrdersView } from 'types/dto-view';

export class GetMoreOrdersController {
  constructor(private getMoreOrdersService: GetMoreOrdersService) {}

  async handler(req: Request, res: Response<MoreOrdersView | ApiError>) {
    try {
      const response = await this.getMoreOrdersService.execute();

      res.status(response.status).json(response.data);
    } catch (e) {
      if (e instanceof ApiError) {
        res?.status(e.status).send(e);
      } else {
        throw new Error(`Unexpected error: Get MoreOrders`);
      }
    }
  }
}
