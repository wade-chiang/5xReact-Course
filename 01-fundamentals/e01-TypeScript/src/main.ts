console.log('hi, typescript');

// TODO 1
const add = (a: number, b: number) => {
  return a + b;
};
console.log(add(1, 1));

// -------------------------------------------------
// TODO 2
// Bad
const pay = (type: number) => {};

// Good：聯集（Unions）：能夠符合其中一種型別即可
type PayType = 1 | 2 | 3 | 4;
const pay2 = (type: PayType) => {
  console.log(type);
};

// pay2(10);

// Perfect
const PAY_GRADE = {
  low: 1,
  average: 2,
  good: 3,
  better: 4,
  best: 5,
} as const;
type PayGrade = (typeof PAY_GRADE)[keyof typeof PAY_GRADE];

const pay3 = (type: PayGrade) => {
  console.log(type);
};
pay3(PAY_GRADE.low);

// TODO 3
const example3 = <T>(a: T) => {
  return a;
};

example3<string>('value');
example3<number>(123);

// -------------------------------------------------

// TODO 4
type Type4 = {
  name: string;
  age?: number;
};
const example4 = (obj: Type4) => {
  return obj.name;
};

interface IType4 {
  name: string;
  age?: number;
}
const example4_2 = (obj: IType4) => {
  return obj.name;
};

// TODO 5
type Type5 = Type4 & {
  address: string;
};

interface IType5 extends IType4 {
  address: string;
}

export default true;
