import React from 'react'
import { shallow } from 'enzyme'

import expenses from '../fixstures/expenes'
import NotFoundPage from '../../components/NotFoundPage'

test('should render NotFoundPage correctly', () => {
  const wrapper = shallow(<NotFoundPage />)
  expect(wrapper).toMatchSnapshot()
})
