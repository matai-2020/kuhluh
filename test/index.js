import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'

test('<App />', () => {
  const expected = 'Things'
  const wrapper = shallow(React.createElement(App))
  expect(wrapper.find('h1').text()).toBe(expected)
})
