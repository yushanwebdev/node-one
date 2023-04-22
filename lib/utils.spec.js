const { getNewUser, mapObjectToArray } = require("./utils");

describe("mapObjectToArray", () => {
  test("map values to array using callback", () => {
    const result = mapObjectToArray({ age: 30, height: 65 }, (k, v) => {
      return v + 10;
    });

    expect(result).toEqual([40, 75]);
  });

  test("callback gets called", () => {
    const mockCb = jest.fn();
    mapObjectToArray(
      {
        age: 30,
        height: 65,
      },
      mockCb
    );

    expect(mockCb.mock.calls.length).toBe(2);
  });
});
