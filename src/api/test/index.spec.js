import api from './../index';

it('should be a function', () => {
  expect(typeof api).toBe('function')
});

it('should return a promise', () => {
  expect(typeof api()).toBe('object')
});