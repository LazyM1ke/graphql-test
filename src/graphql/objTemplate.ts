import {gql} from "@apollo/client";

export const GET_OBJ_TEMPLATE = gql(`
  query {
      objTemplate( where: { code: { contains: "10" } }, order: [{ name: ASC }]) {
        id
        name
        code
        paramTemplates{ id valueType name}

  }
}
`)