import {
  configureStore,
  combineReducers,
  Reducer,
  AnyAction,
  Middleware,
  createListenerMiddleware,
} from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import authReducer, { initialState as authInitialState } from './authSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth' /* , 'app', 'user' */],
}

const combinedReducer = combineReducers({
  auth: authReducer,
})

const initialState = {
  auth: authInitialState,
}

export const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'auth/logout') {
    return combinedReducer({ ...initialState /* app: state.app */ }, action)
  }
  return combinedReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const listenerMiddleware = createListenerMiddleware()

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).prepend(listenerMiddleware.middleware),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof combinedReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
