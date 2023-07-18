import { gql } from '@apollo/client';

export const UPDATE_UNIT = gql(`
    mutation unitUpdate ($Input: UnitUpdateInput!){
        unitUpdate(input: $Input) {
            data isSuccess
        }
    }
`);

type UnitUpdate = {
  data: string;
  isSuccess: boolean;
};
export interface UpdateUnitResponse {
  unitUpdate: UnitUpdate;
}
