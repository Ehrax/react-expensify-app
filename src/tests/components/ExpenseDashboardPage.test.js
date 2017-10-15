import React from 'react'
import { shallow } from 'enzyme'

import expenses from '../fixstures/expenes'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'

test('should render ExpenseDashboardPage correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage />)
  expect(wrapper).toMatchSnapshot()
})
