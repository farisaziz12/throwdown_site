import { capitalize } from "../functions";

describe("Functions", () => {
    test("Capitalize function returns capitalized string", () => {
        const testString = "test string";
        const expectedString = "Test String";
        expect(capitalize(testString)).toBe(expectedString);
    });
});
