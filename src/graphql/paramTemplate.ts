import { gql } from '@apollo/client';

export const GET_PARAMS_TEMPLATES = gql(`
    query paramTemplate($objTemplateId: UUID) {
        paramTemplate(order: [{ name: ASC }], where: {objTemplateId: {eq: $objTemplateId}}) {
            id
            name
            shortName
            fullName
            isActive
            isSystem
            isRemoved
            code
            paramGroup {
                groupName
                id
            }
        }
    }
`);
