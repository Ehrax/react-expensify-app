import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'

import expenses from '../fixstures/expenes'

import ExpenseFrom from '../../components/ExpenseForm'

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseFrom />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm correctly with expense data', () => {
  const wrapper = shallow(<ExpenseFrom expense={expenses[1]} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseFrom />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
  const value = 'New description'
  const wrapper = shallow(<ExpenseFrom />)
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
  const value = 'New note'
  const wrapper = shallow(<ExpenseFrom />)
  wrapper.find('textarea').simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value)
})

test('should set amount if valid input', () => {
  const value = '23.50'
  const wrapper = shallow(<ExpenseFrom />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value)
})

test('should not set amount if invalid input', () => {
  const value = '12.122'
  const wrapper = shallow(<ExpenseFrom />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn()
  const expense = {
    ...expenses[0],
    note: expenses[0].notes
  }
  const wrapper = shallow(<ExpenseFrom expense={expense} onSubmit={onSubmitSpy} />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expense.description,
    amount: expense.amount,
    note: expense.note,
    createdAt: expense.createdAt
  })
})

test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseFrom />)
  wrapper.find('SingleDatePicker').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focus on change', () => {
  const focused = true
  const wrapper = shallow(<ExpenseFrom />)
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused })
  expect(wrapper.state('calendarFocused')).toBe(focused)
})
