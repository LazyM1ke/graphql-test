import { gql } from '@apollo/client';

export const GET_UNITS = gql(`
  query {
      unit(order: [{ name: ASC }]) {
        nodes {
            id
            isRemoved
            kod
            name
            symbol
        }
        totalCount

  }
}
`);
