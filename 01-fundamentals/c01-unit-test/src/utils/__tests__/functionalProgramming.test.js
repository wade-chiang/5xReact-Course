import {
  isDateBetweenRange,
  isPathNameAvailable,
  pipe,
} from '../functionalProgramming';

describe('filter-utils', () => {
  test('isDateBetweenRange', () => {
    const startDate = '2021-11-01T00:00:00.000-07:00';
    const endDate = '2023-01-21T00:00:00.000-07:00';
    let dateNow = new Date('2022-01-01').getTime();
    expect(isDateBetweenRange(startDate, endDate, dateNow)).toBeTruthy();

    dateNow = new Date('2222-01-01').getTime();
    expect(isDateBetweenRange(startDate, endDate, dateNow)).toBeFalsy();

    dateNow = new Date('1999-01-01').getTime();
    expect(isDateBetweenRange(startDate, endDate, dateNow)).toBeFalsy();
  });

  test('isPathNameAvailable', () => {
    expect(isPathNameAvailable(['*'])).toBeTruthy();
    expect(isPathNameAvailable(['/'], '/')).toBeTruthy();
    expect(isPathNameAvailable(['*', '/'], '/')).toBeTruthy();
    expect(isPathNameAvailable(['/'], '/show-me-the-money')).toBeFalsy();
  });
});

describe('pipe', () => {
  it('should return a new function', () => {
    const result = pipe();
    expect(typeof result).toBe('function');
  });
  it('should take an argument', () => {
    const fn = vi.fn();
    const result = pipe(fn);
    result('argument');
    expect(fn).toHaveBeenCalledWith('argument');
  });
  it('should apply each function to the argument', () => {
    const fn1 = vi.fn((x) => x + 1);
    const fn2 = vi.fn((x) => x * 2);
    const result = pipe(fn1, fn2);
    const output = result(2);
    expect(output).toBe(6);
    expect(fn1).toHaveBeenCalledWith(2);
    expect(fn2).toHaveBeenCalledWith(3);
  });
  test('should return correct', () => {
    const add2 = (a) => a + 2;
    const multi3 = (a) => a * 3;
    const addThenMulti = pipe(add2, multi3);
    expect(addThenMulti(2)).toBe(12);

    const div4 = (a) => a / 4;
    const addThenMultiDiv = pipe(add2, multi3, div4);
    expect(addThenMultiDiv(2)).toBe(3);
  });
});
