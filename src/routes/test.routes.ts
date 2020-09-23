import { Router, Request, Response } from 'express';

import TestController from '../controllers/TestController';
import { createTest } from '../validations/createTest';

const testController = new TestController();

const test = Router();

test.get('/', (req: Request, res: Response) => {
  return res.send('Teste Docker ok');
});

test.get('/:id', testController.show);

test.post('/', createTest, testController.store);

export default test;
