import { getCustomRepository } from 'typeorm';
import TestRepository from '../repositories/Test';
import Test from '../models/Test';

class ShowTestService {
  public async execute(id: string): Promise<Test | undefined> {
    const testRepository = getCustomRepository(TestRepository);

    const test = await testRepository.findTestById(id);

    return test;
  }
}

export default ShowTestService;
