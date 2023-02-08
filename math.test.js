/* eslint-disable no-undef */
import {add, subtract} from './math.js';

describe("Testons les calculs mathématiques", () => {
    test("additionner deux nombres", () => {
        expect(add(1, 7)).toBe(8);
    })

    test("soustraire deux nombres", () => {
        expect(subtract(8, 3)).toBe(5);
    })
})