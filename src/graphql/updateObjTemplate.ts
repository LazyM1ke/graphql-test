import { gql } from '@apollo/client';

export const UPDATE_OBJ_TEMPLATE = gql(`
    mutation updateObjTemplate ($Input: ObjTemplateInput!){
        updateObjTemplate(input: $Input) {
            data isSuccess
        }
    }
`);
