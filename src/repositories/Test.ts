import { EntityRepository, Repository } from 'typeorm';

import Test from '../models/Test';

@EntityRepository(Test)
class TestRepository extends Repository<Test> {
  public async findTestById(id: string): Promise<Test | undefined> {
    const findTest = await this.findOne({
      where: { id },
    });

    return findTest;
  }
}

export default TestRepository;
