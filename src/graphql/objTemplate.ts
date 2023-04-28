import { gql } from '@apollo/client'

export const GET_OBJ_TEMPLATE = gql(`
  query {
      objTemplate(order: [{ name: ASC }]) {
        id
        name
        code
        isActive
        paramTemplates{ id valueType name}

  }
}
`)
