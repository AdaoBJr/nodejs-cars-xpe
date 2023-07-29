import { Request, Response } from 'express';

import { ApiError } from 'core';
import { GetAllOrdersService } from 'services';

import { AllOrdersView } from 'types/dto-view';

export class GetAllOrdersController {
  constructor(private getAllOrdersService: GetAllOrdersService) {}

  async handler(req: Request, res: Response<AllOrdersView | ApiError>) {
    try {
      const response = await this.getAllOrdersService.execute();

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
