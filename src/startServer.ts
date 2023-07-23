import 'dotenv/config';
import express, { Response } from 'express';

const { PORT } = process.env;

const startServer = () => {
  const app = express();
  app.use(express.json());

  app.get('/', (_, response: Response) => {
    response.send('Atualizando rota de exemplo');
  });

  app.listen(PORT, () => {
    console.log(`🔥 Server Running on http://localhost:${PORT}`);
  });
};

export { startServer };
