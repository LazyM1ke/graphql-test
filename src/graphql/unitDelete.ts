import { gql } from '@apollo/client';

export const DELETE_UNIT = gql(`
    mutation unitDelete ($Input: UUID!){
        unitDelete(input: $Input) {
            data isSuccess 
        }
    }
`);

type UnitDelete = {
  data: string;
  isSuccess: boolean;
};
export interface DeleteUnitResponse {
  unitDelete: UnitDelete;
}
