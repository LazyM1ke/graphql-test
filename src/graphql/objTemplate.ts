import { gql } from '@apollo/client';

// export interface ITemplate {
//   code: string
//   id: string
//   isActive: boolean
//   name: string
//   paramTemplates?: paramTemplate[]
// }

export const GET_OBJ_TEMPLATE = gql(`
  query {
      objTemplate(order: [{ name: ASC }]) {
        id
        name
        shortName
        fullName
        paramTemplates{ id valueType name isSystem}

  }
}
`);
