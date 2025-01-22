import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'
// import $api, { CustomAxiosRequestConfig } from '../utils/tools/api'
export interface AuthDTO {
  email: string
  password: string
}

export enum ROLE {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  CUSTOMER = 'CUSTOMER',
}

interface User {
  role: ROLE
}

interface State {
  user?: User
}

export const initialState: State = {}

export const attemptLogin = createAsyncThunk<User['role'], AuthDTO>(
  'auth/authorization',
  async (payload) => {
    console.log('payload:', payload)
    // const response = await $api.post(`auth/login`, payload)
    // return response.data
    return ROLE['ADMIN']
  },
)

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      // Handled in store.ts in rootReducer
    },
    resetUser: (
      //temporary
      state,
      { payload }: PayloadAction<void>,
    ) => {
      state.user = undefined
    },
  },
  extraReducers: (builder) => {
    builder.addCase(attemptLogin.fulfilled, (state, { payload }) => {
      console.log('attemptLogin fulfilled', payload)
      state.user = { role: payload }
    })
  },
})

export const { logout, resetUser } = authReducer.actions
export default authReducer.reducer
