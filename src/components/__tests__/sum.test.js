import {sum} from "../sum"


test("sum of two digits",() => {
    const result = sum(3,4);
    expect(result).toBe(7)
})