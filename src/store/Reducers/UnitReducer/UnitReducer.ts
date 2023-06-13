import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Unit } from '../../../graphql/types/types';

interface UnitState {
  unitList: Unit[];
}

const initialState: UnitState = {
  unitList: [],
};

const unitSlice = createSlice({
  name: 'unit',
  initialState,
  reducers: {
    setUnitList(state, action: PayloadAction<Unit[]>) {
      if (action.payload) {
        state.unitList = action.payload;
      }
    },
  },
});

export default unitSlice.reducer;
export const { setUnitList } = unitSlice.actions;
