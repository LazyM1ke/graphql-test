import { gql } from '@apollo/client';

export const GET_PARAMS_TEMPLATES = gql(`
    query {
        paramTemplate(order: [{ name: ASC }]) {
            id
            name
            shortName
            fullName
            isActive
            isSystem
            isRemoved
        }
    }
`);
