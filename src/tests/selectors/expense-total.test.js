import expenses from '../fixstures/expenes'

import getExpensesTotal from '../../selectors/expense-total'

test('should return 0 if no expenses', () => {
  const total = 0
  const expensesTotal = getExpensesTotal([])
  expect(expensesTotal).toBe(total)
})

test('should correctly add up a single expense', () => {
  const total = expenses[0].amount
  const expensesTotal = getExpensesTotal([expenses[0]])
  expect(expensesTotal).toBe(total)
})

test('should correctly add up multiple expenses', () => {
  const total = expenses[0].amount + expenses[1].amount + expenses[2].amount
  const expensesTotal = getExpensesTotal(expenses)
  expect(expensesTotal).toBe(total)
})
