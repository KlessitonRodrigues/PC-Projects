import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import TradeDashboard from '../components/tradeDashBoard'
import { theme } from '../style/theme'

describe('TradeDashboard Component', () => {
  it('Should match with the previous snapshot', () => {
    const component = renderer
      .create(
        <ThemeProvider theme={theme}>
          <TradeDashboard />
        </ThemeProvider>
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })
})
