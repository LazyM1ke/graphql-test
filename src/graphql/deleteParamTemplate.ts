import { gql } from '@apollo/client';

export const DELETE_PARAM_TEMPLATE = gql(`
    mutation deleteParamTemplate($input: [UUID!]!){
       deleteParamTemplate(input: $input) {
            data isSuccess
       }
  }
    
`);
