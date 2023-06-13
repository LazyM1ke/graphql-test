import { combineReducers } from '@reduxjs/toolkit';
import ObjTemplateSlice from './ObjTemplateReducer/ObjTemplateSlice';
import objParamSlice from './AttributeParamReducer/ObjParamReducer';
import unitSlice from './UnitReducer/UnitReducer';
const rootReducer = combineReducers({
  ObjTemplateSlice,
  objParamSlice,
  unitSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
