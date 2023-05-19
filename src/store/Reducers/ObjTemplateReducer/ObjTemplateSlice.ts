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
export type ChangeTempateDataType = {
  templateId: string;
  key: keyof Pick<objTemplate, 'shortName' | 'fullName'>;
  value: string;
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
    changeTemplateData(state, action: PayloadAction<ChangeTempateDataType>) {
      const { templateId, key, value } = action.payload;
      const newObjIndex = state?.objTemplates.findIndex((_) => _.id === templateId);
      state.objTemplates[newObjIndex][key] = value;
    },
  },
});

export default objTemplateSlice.reducer;
export const { setObjTemplates, setActiveObjTemplate, changeTemplateData } = objTemplateSlice.actions;
