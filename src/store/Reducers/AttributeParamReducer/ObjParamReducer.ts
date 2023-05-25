import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { paramTemplate } from '../../../graphql/types/types';

interface ParamTemplateState {
  paramsTemplates: paramTemplate[];
  activeParam: string;
}

const initialState: ParamTemplateState = {
  paramsTemplates: [],
  activeParam: '',
};

const objParamSlice = createSlice({
  name: 'objParamTemplate',
  initialState,
  reducers: {
    setParamsTemplates(state, action: PayloadAction<paramTemplate[]>) {
      if (action.payload) {
        state.paramsTemplates = action.payload;
      }
    },
    setActiveParam(state, action: PayloadAction<string>) {
      state.activeParam = action.payload;
    },
  },
});

export default objParamSlice.reducer;
export const { setParamsTemplates, setActiveParam } = objParamSlice.actions;
