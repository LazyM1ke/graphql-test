import { gql } from '@apollo/client';

export const DELETE_UNIT = gql(`
    mutation unitDelete ($Input: UUID!){
        unitCreate(input: $Input) {
            data isSuccess errors
        }
    }
`);
