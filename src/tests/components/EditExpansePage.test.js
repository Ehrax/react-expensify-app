import React from 'react'
import { shallow } from 'enzyme'

import expenses from '../fixstures/expenes'

import { EditExpensePage } from '../../components/EditExpansePage'

let history, editExpense, startRemoveExpense, wrapper

beforeEach(() => {
  editExpense = jest.fn()
  startRemoveExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<EditExpensePage
    expense={expenses[1]}
    editExpense={editExpense}
    startRemoveExpense={startRemoveExpense}
    history={history} />)
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})

test('should handle startRemoveExpense correctly', () => {
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[1].id)
})
