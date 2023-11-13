import { getMonth } from "../utils/getMonth";

describe ('test for function getMonth', () => {
    it ('true, error', () => {
        expect(getMonth(6)).toBe('Июнь')
        expect(getMonth(2)).toBe('Февраль')
        expect(getMonth(15)).toBe('Данные неверны')
        expect(getMonth('3')).toBe('Данные неверны')
        expect(getMonth('month')).toBe('Данные неверны')
    })
})