import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import store from './store'
import { Provider } from 'react-redux'
import { presetGpnDark, Theme } from '@consta/uikit/Theme'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const client = new ApolloClient({
  uri: 'https://billstruk.bsite.net/graphql/',
  cache: new InMemoryCache(),
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Theme preset={presetGpnDark}>
          <App />
        </Theme>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
)

reportWebVitals()
