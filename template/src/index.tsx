import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import '@ant-design/v5-patch-for-react-19'
import { ConfigProvider as AntdConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { defaultTheme } from './utils/theme/antdThemeConfig'
import { Provider } from 'react-redux'
import { persistor, store } from './utils/redux/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <AntdConfigProvider theme={defaultTheme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AntdConfigProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
