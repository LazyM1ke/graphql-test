import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { paramTemplate } from '../../../graphql/types/types';

interface ParamTemplateState {
  paramsTemplates: paramTemplate[];
  activeParam: string;
  isLoading: boolean;
  deleteModalOpened: boolean;
}

const initialState: ParamTemplateState = {
  paramsTemplates: [],
  activeParam: '',
  isLoading: false,
  deleteModalOpened: false,
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
    setParamLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setDeleteModal(state, action: PayloadAction<boolean>) {
      state.deleteModalOpened = action.payload;
    },
  },
});

export default objParamSlice.reducer;
export const { setDeleteModal, setParamLoading, setParamsTemplates, setActiveParam } = objParamSlice.actions;
