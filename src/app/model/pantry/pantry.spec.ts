import { Pantry } from './pantry';

function generateEmail() {
  return Math.random().toString(36).substring(2, 10) + '@example.com';
}

describe('Pantry', () => {
  it('should create an instance', () => {
    expect(new Pantry(generateEmail(), Pantry.generateCode())).toBeTruthy();
  });

  it('should generate a code', () => {
    const code = Pantry.generateCode();
    expect(code).toMatch(/^[A-Z0-9]{4}$/);
  });
});
