const assert = require("assert");
//const index = require("../index");
const { comp } = require("../index");

describe("Tests", () => {
  test("Array test", () => {
    let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
    expect(comp(a1, a2)).toBeTruthy();
  });

  test("Array test abnormal", () => {
    let a1 = [121, 144, 19, 161, 19, 144, 19, 10];
    let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
    expect(comp(a1, a2)).toBeFalsy();
  });

  test("Dictionary test", () => {
    let a1 = { hoge: 'hoge'};
    let a2 = { hoge: 'hoge'};
    expect(comp(a1, a2)).toBeTruthy();
  });

  test("Dictionary test abnormal", () => {
    let a1 = { hoge: 'hoge1'};
    let a2 = { hoge: 'hoge'};
    expect(comp(a1, a2)).toBeFalsy();
  });

  test("null or undefined test.", () => {
    let a1 = null;
    let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
    expect( comp(a1, a2) ).toBeFalsy();

    a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    a2 = null;
    expect( comp(a1, a2) ).toBeFalsy();

    a1 = undefined;
    a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
    expect( comp(a1, a2) ).toBeFalsy();

    a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    a2 = undefined;
    expect( comp(a1, a2) ).toBeFalsy();
  });
});
