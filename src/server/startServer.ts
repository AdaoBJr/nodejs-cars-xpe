import 'dotenv/config';
import express, { Response } from 'express';

import { router } from 'routes';

const { PORT } = process.env;

const startServer = () => {
  const app = express();
  app.use(express.json());
  app.use('/api', router);

  app.get('/', (_, response: Response) => {
    response.send('Rota Home');
  });

  app.listen(PORT, () => {
    console.log(`🔥 Server Running on http://localhost:${PORT}`);
  });
};

export { startServer };
