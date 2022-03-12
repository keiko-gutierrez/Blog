import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme'
import Fonts from './fonts'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Fonts />
          <App />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>,
    document.getElementById('app')
  )
})
