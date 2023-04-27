import {gql} from "@apollo/client";

export const ADD_OBJ_TEMPLATE = gql(`
    mutation addObjTemplate($input: ObjTemplateInput!){
       addObjTemplate(input: $input) {
            data isSuccess
       }
  }
    
`)