import { Router } from 'express';

import TestController from '../controllers/TestController';
import { createTest } from '../validations/createTest';

const testController = new TestController();

const test = Router();

test.get('/:id', testController.show);

test.post('/', createTest, testController.store);

export default test;
