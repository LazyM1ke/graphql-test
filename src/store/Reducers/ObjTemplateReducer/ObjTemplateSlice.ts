import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { objTemplate } from '../../../graphql/types/types';

interface objTemplateState {
  objTemplates: objTemplate[];
  activeTemplate: string;
}

const initialState: objTemplateState = {
  objTemplates: [],
  activeTemplate: '',
};

const objTemplateSlice = createSlice({
  name: 'objTemplate',
  initialState,
  reducers: {
    setObjTemplates(state, action: PayloadAction<objTemplate[]>) {
      if (action.payload) {
        state.objTemplates = action.payload;
      }
    },
    setActiveObjTemplate(state, action: PayloadAction<string>) {
      state.activeTemplate = action.payload;
    },
  },
});

export default objTemplateSlice.reducer;
export const { setObjTemplates, setActiveObjTemplate } = objTemplateSlice.actions;
