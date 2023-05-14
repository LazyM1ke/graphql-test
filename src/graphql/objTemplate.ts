import { gql } from '@apollo/client'
import { paramTemplate } from './types/types'

export interface ITemplate {
  code: string
  id: string
  isActive: boolean
  name: string
  paramTemplates: paramTemplate[]
}

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
