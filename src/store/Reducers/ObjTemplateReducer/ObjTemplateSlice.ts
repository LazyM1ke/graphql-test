import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { objTemplate } from '../../../graphql/types/types';

interface objTemplateState {
  objTemplates: objTemplate[];
}

const initialState: objTemplateState = {
  objTemplates: [],
};

const objTemplateSlice = createSlice({
  name: 'objTemplate',
  initialState,
  reducers: {
    setObjTemplates(state, action: PayloadAction<objTemplate[]>) {
      state.objTemplates = action.payload;
    },
    setActiveObjTemplate(state, action: PayloadAction<string>) {
      const template = state.objTemplates.find((temp) => temp.id === action.payload);
      if (template) {
        template.isActive = !template.isActive;
      }
    },
  },
});

export default objTemplateSlice.reducer;
export const { setObjTemplates, setActiveObjTemplate } = objTemplateSlice.actions;
