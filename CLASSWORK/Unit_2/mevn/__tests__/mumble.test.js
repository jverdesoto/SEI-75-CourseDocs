const mumble = require('../client/src/components/mumble');
describe('The Mumble Function', () => {


    test("single l(adies)etter", () => {
        expect(mumble('X')).toBe('X');
    });


    test("baby steps", () => {
        expect(mumble('abc')).toBe('a-bb-ccc');
    });


    test("maths GCSE", () => {
        expect(mumble('121')).toBe('1-22-111');
    });


    test("drum and space", () => {
        expect(mumble('!A 2')).toBe('!-AA-   -2222');
    });



});
