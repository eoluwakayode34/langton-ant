const { expect, test } = require('@jest/globals')
const moveAnt= require('./index.js')

test('check if ant movement is number', () => {
    expect(typeof moveAnt.ANTDOWN).toEqual('number')
    expect(typeof moveAnt.ANTLEFT).toEqual('number')
    expect(typeof moveAnt.ANTRIGHT).toEqual('number')
    expect(typeof moveAnt.ANTUP).toEqual('number')

})


test('check the value of ant movement antdown = 2, antup=0 , antright=1 , antleft= 3', () => {
    expect(moveAnt.ANTDOWN).toBe(2)
    expect(moveAnt.ANTLEFT).toBe(3)
    expect(moveAnt.ANTRIGHT).toBe(1)
    expect(moveAnt.ANTUP).toBe(0)
})






