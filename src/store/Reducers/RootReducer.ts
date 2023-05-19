import { combineReducers } from '@reduxjs/toolkit';
import ObjTemplateSlice from './ObjTemplateReducer/ObjTemplateSlice';
import objParamSlice from './AttributeParamReducer/ObjParamReducer';
const rootReducer = combineReducers({
  ObjTemplateSlice,
  objParamSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
