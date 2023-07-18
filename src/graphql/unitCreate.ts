import { gql } from '@apollo/client';

export const CREATE_UNIT = gql(`
    mutation unitCreate ($Input: UnitAddInput!){
        unitCreate(input: $Input) {
            data isSuccess
        }
    }
`);

type UnitCreate = {
  data: string;
  isSuccess: boolean;
};
export interface CreateUnitResponse {
  unitCreate: UnitCreate;
}
