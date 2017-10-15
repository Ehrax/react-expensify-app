import React from 'react'
import { shallow } from 'enzyme'

import expenses from '../fixstures/expenes'
import { ExpenseList } from '../../components/ExpenseList'

test('should render ExenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseList with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />)
  expect(wrapper).toMatchSnapshot()
})
