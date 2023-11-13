import {definePrime} from '../../utils/definePrime.js'

xdescribe ("tests for definePrime function", () => {
    const simple = 19;
    const complex = 24;
    it ("simple number", () => {
        expect(definePrime(simple)).toBe(`Число ${simple} - простое число`)
    }),
    it ("complex number", () => {
        expect(definePrime(complex)).toBe(`Число ${complex} - составное число`)
    }),
    it ("invalid number", () => {
        expect(definePrime(1003)).toBe('Данные неверны')
    })
})

describe ("tests for definePrime function", () => {
    const simple = 19;
    const complex = 24;
    it ('simple, complex or invalid number', () => {
        expect(definePrime(simple)).toBe(`Число ${simple} - простое число`)
        expect(definePrime(complex)).toBe(`Число ${complex} - составное число`)
        expect(definePrime(1003)).toBe('Данные неверны') 
    })
})