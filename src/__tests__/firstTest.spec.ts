import Test from '@models/Test';

describe('Test', () => {
  it('check test', () => {
    const test = new Test();

    test.name = 'Ítalo';

    expect(test.name).toEqual('Ítalo');
  });
});
