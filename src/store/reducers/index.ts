import { combineReducers } from '@reduxjs/toolkit'
import authSlice from './Auth' // 可以引入各种 reducer

const rootReducers = combineReducers({
  auth: authSlice
})

export default rootReducers
