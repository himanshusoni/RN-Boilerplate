import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { WelcomeBanner } from '../pageOne'

describe('Testing WelcomeBanner component', () => {
  test('Renders correctly', () => {
    const title = 'Welcome React Native'
    const features = ['a', 'b', 'c']
    const wrapper = shallow(<WelcomeBanner title={title} features={features} />)
    // const wrapper = renderer.create(<WelcomeBanner title={title} features={features} />).toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})
