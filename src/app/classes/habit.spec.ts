import { Habit } from "./habit";

describe('Habit', () => {
  it('should create an instance', () => {
    expect(new Habit('Exercício', new Date(0), 'Academia', true)).toBeTruthy();
  });
});