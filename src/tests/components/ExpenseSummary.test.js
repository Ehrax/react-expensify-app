import React from 'react'
import { shallow } from 'enzyme'

import expenses from '../fixstures/expenes'

import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render ExpenseSummary correctly', () => {
  const wrapper = shallow(<ExpensesSummary />)
  expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpenseSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={50000} />)
  expect(wrapper).toMatchSnapshot()
})
