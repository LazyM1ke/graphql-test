import React, {useEffect, useState} from 'react';
import {useMutation, useQuery} from "@apollo/client";
import {GET_OBJ_TEMPLATE} from "./graphql/objTemplate";
import {objTemplate, paramTemplate} from "./graphql/types/types";
import {ADD_OBJ_TEMPLATE} from "./graphql/addObjTemplate";
import './App.css';

function App() {
    const [tempName, setTempName] = useState('')

    const {data, loading, error, refetch } = useQuery(GET_OBJ_TEMPLATE)
    const [addObjTemplate, {data: addTemplateData, loading: addTemplateLoading, error: addTemplateError}] = useMutation(ADD_OBJ_TEMPLATE, {refetchQueries: [
            { query: GET_OBJ_TEMPLATE }
        ]})

    useEffect(() => {

    }, [data])

    const addTemplate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addObjTemplate({variables: {input: {
            name: tempName,
            fullName: tempName,
            groupId: "1c868ead-b9de-4d1e-9f6e-4a74eb463553",
            shortName: tempName,
            code: "test"

        }}})
    }
    if (addTemplateLoading) {
        return <h1>adding new template</h1>
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) return <div>{`Error! ${error.message}`}</div>;

  return (
    <div className="App">
        <input value={tempName} onChange={(e) => setTempName(e.target.value)} placeholder='Type template name...' type="text"/>

        <button onClick={(e) => addTemplate(e)}>ADD TEMPLATE</button>

        {data.objTemplate.map((item: objTemplate, idx: number) => (
            <>
                <div key={item.id}>{idx + 1}) {item.name} - [{item.code}]</div>
                {item.paramTemplates?.map((param: paramTemplate) => <div key={param.id}>{param.name}</div>
                )}
            </>
        ))}
    </div>
  );
}

export default App;
