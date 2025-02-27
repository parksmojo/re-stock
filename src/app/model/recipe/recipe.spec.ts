import { Recipe } from './recipe';

describe('Recipe', () => {
  it('should create an instance', () => {
    expect(new Recipe({ name: 'Test' })).toBeTruthy();
  });
});
