import React, { Suspense } from 'react'
import AppFallback from './utils/routes/AppFallback'
import { notification } from 'antd'
import ToastProvider from './components/Toast/ToastContext'
import AppRoutes from './utils/routes/AppRoutes'

function App() {
  const [api, toastContextHolder] = notification.useNotification({
    stack: false,
    maxCount: 4,
  })
  return (
    <Suspense fallback={<AppFallback />}>
      {toastContextHolder}
      <ToastProvider api={api}>
        <AppRoutes />
      </ToastProvider>
    </Suspense>
  )
}

export default App
