// Pure Function

export const add = (a, b) => {
  return a + b;
};

const fruits = ['apple', 'banana', 'orange'];

export const putFruit = (fruit) => {
  fruits.push(fruit);
  return fruits;
};
