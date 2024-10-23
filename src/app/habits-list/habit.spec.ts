import { Habit } from "./habit";

describe('Habit', () => {
  it('should create an instance', () => {
    expect(new Habit('Exercício', '07:00', '2024-10-23', 'Academia', true)).toBeTruthy();
  });
});
