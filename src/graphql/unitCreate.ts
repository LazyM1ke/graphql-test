import { gql } from '@apollo/client';

export const CREATE_UNIT = gql(`
    mutation unitCreate ($Input: UnitAddInput!){
        unitCreate(input: $Input) {
            data isSuccess errors
        }
    }
`);
