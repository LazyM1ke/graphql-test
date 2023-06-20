import { gql } from '@apollo/client';

export const PARAM_TEMPLATE_UPDATE = gql(`
    mutation paramTemplateUpdate ($Input: [ParamTemplateInput!]!){
        paramTemplateUpdate(input: $Input) {
            data isSuccess
        }
    }
`);
