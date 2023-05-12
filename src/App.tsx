import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { GET_OBJ_TEMPLATE } from './graphql/objTemplate'
import { ADD_OBJ_TEMPLATE } from './graphql/addObjTemplate'
import styled from 'styled-components'
import { useAppDispatch } from './store/hooks/hooks'
import { setObjTemplates } from './store/Reducers/ObjTemplateReducer/ObjTemplateSlice'
import Header from './components/Header/Header'
import Tree from './components/Tree/Tree'
import TreeItem from './components/TreeItem/TreeItem'
import { IconHealth } from '@consta/uikit/IconHealth'
import { IconEdit } from '@consta/uikit/IconEdit'
import { TextField } from '@consta/uikit/TextField'

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
      <MainPanel>
        <Tree
          title="Шаблоны"
          firstHeaderIcon={
            <IconHealth
              size="s"
              view="secondary"
            />
          }
          secondHeaderIcon={
            <IconEdit
              size="s"
              view="secondary"
            />
          }
        >
          <TreeItem />
        </Tree>
        <Tree
          title="Сведения"
          firstHeaderIcon={
            <IconHealth
              size="s"
              view="secondary"
            />
          }
          secondHeaderIcon={
            <IconEdit
              size="s"
              view="secondary"
            />
          }
        >
          <TextField
            placeholder="Наименование шаблона"
            label="Шаблон наименование короткое"
            labelPosition="top"
          />
          <TextField
            placeholder="Описание шаблона"
            label="Описание"
            labelPosition="top"
          />
        </Tree>
      </MainPanel>
    </div>
  )
}

const MainPanel = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
`

export default App
