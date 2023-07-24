import { Request, Response } from 'express';

import { ApiError } from 'core';
import { GetHealthService } from 'services';
import { HealthView } from 'types/dto-view';

class GetHealthController {
  constructor(private getHealthService: GetHealthService) {}

  async handler(req: Request, res: Response<HealthView | ApiError>) {
    try {
      const response = await this.getHealthService.execute();

      res.status(response.status).json(response.data);
    } catch (e) {
      if (e instanceof ApiError) {
        res?.status(e.status).send(e);
      } else {
        throw new Error(`Unexpected error: Get Health`);
      }
    }
  }
}

export { GetHealthController };
