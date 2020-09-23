import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';

import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';

import './database';
import routes from '@routes/index';
import AppError from './errors/AppError';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);
app.use(errors());

app.use((err: Error, req: Request, resp: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return resp
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }
  console.log(err);

  return resp.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(3333, () => {
  console.log(`Server started on port ${process.env.SERVER_PORT}`);
});
