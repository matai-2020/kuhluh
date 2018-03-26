import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'

test('<App />', () => {
  const expected = 'Kuhluhs'
  const wrapper = shallow(<App />)
  expect(wrapper.find('h1').text()).toBe(expected)
})
