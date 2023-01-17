import { test as testingFunction } from '@src/sub/example';

describe('Testing', () => {
  test('Example', async () => {
    testingFunction();
    expect('example').toBe('example');
  });
});
