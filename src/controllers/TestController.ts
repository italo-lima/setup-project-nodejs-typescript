import { Request, Response } from 'express';

import CreateTestService from '../services/CreateTestService';
import ShowTestService from '../services/ShowTestService';

class TestController {
  public async show(req: Request, res: Response) {
    const { id } = req.params;

    const showTestService = new ShowTestService();

    const test = await showTestService.execute(id);

    return res.json(test);
  }

  public async store(req: Request, res: Response) {
    const { name } = req.body;

    const createTestService = new CreateTestService();

    const test = await createTestService.execute({ name });

    return res.json(test);
  }
}

export default TestController;
