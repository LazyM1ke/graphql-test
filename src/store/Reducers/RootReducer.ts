import { combineReducers } from '@reduxjs/toolkit'
import ObjTemplateSlice from './ObjTemplateReducer/ObjTemplateSlice'

const rootReducer = combineReducers({
  ObjTemplateSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
