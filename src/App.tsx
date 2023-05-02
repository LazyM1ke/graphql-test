import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { GET_OBJ_TEMPLATE } from './graphql/objTemplate'
import { ADD_OBJ_TEMPLATE } from './graphql/addObjTemplate'
import styled from 'styled-components'
import { useAppDispatch } from './store/hooks/hooks'
import { setObjTemplates } from './store/Reducers/ObjTemplateReducer/ObjTemplateSlice'
import Header from './components/Header/Header'
import Tree from './components/Tree/Tree'
import { CollapseGroup } from '@consta/uikit/CollapseGroup'
import TreeItem from './components/TreeItem/TreeItem'

function App() {
  const dispatch = useAppDispatch()
  const [tempName, setTempName] = useState('')

  const { data, loading, error } = useQuery(GET_OBJ_TEMPLATE)
  const [addObjTemplate, { loading: addTemplateLoading }] = useMutation(ADD_OBJ_TEMPLATE, {
    refetchQueries: [{ query: GET_OBJ_TEMPLATE }],
  })

  useEffect(() => {}, [data])

  const addTemplate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addObjTemplate({
      variables: {
        input: {
          name: tempName,
          fullName: tempName,
          groupId: '1c868ead-b9de-4d1e-9f6e-4a74eb463553',
          shortName: tempName,
          code: 'test',
        },
      },
    })
    setTempName('')
  }
  if (addTemplateLoading) {
    return <h1>adding new template</h1>
  }

  if (loading) {
    return <h1>Loading...</h1>
  } else {
    dispatch(setObjTemplates(data.objTemplate))
  }

  if (error) return <div>{`Error! ${error.message}`}</div>

  return (
    <div>
      <Header />
      <Tree>
        <TreeItem />
      </Tree>
    </div>

    // <MainPanel className="App">
    //   <InputWrapper>
    //     <Input
    //       value={tempName}
    //       onChange={(e) => setTempName(e.target.value)}
    //       placeholder="Type template name..."
    //       type="text"
    //     />
    //
    //     <Button onClick={(e) => addTemplate(e)}>ADD TEMPLATE</Button>
    //   </InputWrapper>
    //   <ObjTemplateList>
    //     {data.objTemplate.map((item: objTemplate, idx: number) => (
    //       <div>
    //         <ObjTemplate
    //           idx={idx}
    //           key={item.id}
    //           {...item}
    //         />
    //         {item.paramTemplates && item.paramTemplates.length ? (
    //           <ObjTemplate
    //             idx={idx}
    //             {...item}
    //           />
    //         ) : null}
    //       </div>
    //     ))}
    //   </ObjTemplateList>
    //   {/*{item.paramTemplates?.map((param: paramTemplate) => (*/}
    //   {/*  <div key={param.id}>{param.name}</div>*/}
    //   {/*))}*/}
    // </MainPanel>
  )
}

const MainPanel = styled.div`
  width: 400px;
  padding: 15px 20px;
  background-color: antiquewhite;
`
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`
const ObjTemplateList = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Input = styled.input`
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
`

const Button = styled.button`
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: aquamarine;
`

export default App
