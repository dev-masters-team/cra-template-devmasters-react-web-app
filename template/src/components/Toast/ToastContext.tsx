import React, { createContext, useContext, useMemo } from 'react'
import { ArgsProps, NotificationInstance } from 'antd/es/notification/interface'
import Toast from './Toast'

interface ToastContextProps {
  ToastOpen: (props: { key?: React.Key } & Omit<ArgsProps, 'key'>) => void
  ToastOpenOnce: (props: { key: React.Key } & Omit<ArgsProps, 'key'>) => void
  ToastDestroy: (key?: string) => void
}

interface ToastProviderProps {
  children: React.ReactNode
  api: NotificationInstance
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined)

export const useToastContext = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider')
  }
  return context
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children, api }) => {
  const ToastOpen = (props: { key?: React.Key } & Omit<ArgsProps, 'key'>) => {
    Toast.open(api, props)
  }

  const ToastOpenOnce = (props: { key: React.Key } & Omit<ArgsProps, 'key'>) => {
    Toast.openOnce(api, props)
  }

  const ToastDestroy = (key?: string) => {
    Toast.destroy(api, key)
  }

  const memoizedValue = useMemo(
    () => ({
      ToastOpen,
      ToastOpenOnce,
      ToastDestroy,
    }),
    [ToastOpen, ToastOpenOnce, ToastDestroy],
  )

  return <ToastContext.Provider value={memoizedValue}>{children}</ToastContext.Provider>
  // return <>{children}</>
}

export default ToastProvider
