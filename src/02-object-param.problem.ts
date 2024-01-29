import { expect, it } from "vitest";

// 01. EKSPLICITNO DEFINISANJE TIPA PROMJENJIVIH UNUTAR "params":
//
// export const addTwoNumbers = (params: {first: number, second: number}) => {
//     return params.first + params.second;
// };
//
// 02. KORIŠĆENJE INTERFEJSA:
//
// interface AddTwoNumberArgs {
//     first: number,
//     second: number,
// }
//
// export const addTwoNumbers = (params: AddTwoNumberArgs) => {
//   return params.first + params.second;
// };
//
// NAJOPTIMALNIJI NAČIN - EKSPLICITNO DEFINISANJE TIPA:
type AddTwoNumbersArgs = {
    first: number,
    second: number,
}

export const addTwoNumbers = (params: AddTwoNumbersArgs) => {
    return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
