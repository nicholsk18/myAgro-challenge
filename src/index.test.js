const getDaysOfPower = require('./index')

test('Find out days of power if farmer has $21000', () => {
    expect(getDaysOfPower(1000, 3, 500, 10, 1500, 7, 21000)).toBe(10)
})

test('Find out days of power if farmer has $700000', () => {
    expect(getDaysOfPower(3000, 3, 500, 10, 1500, 7, 700000)).toBe(141)
})

test('Find out days of power if farmer has $21000', () => {
    expect(getDaysOfPower(500, 3, 500, 10, 500, 7, 21000)).toBe(17)
})

test('Find out days of power if farmer has $10000', () => {
    expect(getDaysOfPower(1300, 0, 500, 0, 1500, 7, 10000)).toBe(5)
})

test('Find out days of power if farmer has $11000', () => {
    expect(getDaysOfPower(10000, 3, 500, 10, 1500, 7, 11000)).toBe(1)
})