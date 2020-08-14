import { getRepository } from 'typeorm';
import Test from '../models/Test';

interface Request {
  name: string;
}

class CreateTestService {
  public async execute({ name }: Request): Promise<Test> {
    const testRepository = getRepository(Test);

    const test = testRepository.create({ name });

    await testRepository.save(test);

    return test;
  }
}

export default CreateTestService;
