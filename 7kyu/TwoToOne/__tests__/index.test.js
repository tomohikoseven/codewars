var longest = require("../index");

describe("longest", function () {
  test("example", () => {
    expect(longest("aaa", "bbb")).toEqual("ab");
  });
  test("Basic tests", function () {
    expect(longest("aretheyhere", "yestheyarehere")).toEqual("aehrsty");
    expect(longest("loopingisfunbutdangerous", "lessdangerousthancoding")).toEqual(
      "abcdefghilnoprstu"
    );
    expect(longest("inmanylanguages", "theresapairoffunctions")).toEqual("acefghilmnoprstuy");
  });
});
