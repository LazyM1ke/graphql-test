import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { GET_OBJ_TEMPLATE, ITemplate } from './graphql/objTemplate'
import { ADD_OBJ_TEMPLATE } from './graphql/addObjTemplate'
import styled from 'styled-components'
import { useAppDispatch } from './store/hooks/hooks'
import { setObjTemplates } from './store/Reducers/ObjTemplateReducer/ObjTemplateSlice'
import Header from './components/Header/Header'
import Tree from './components/Tree/Tree'
import { IconHealth } from '@consta/uikit/IconHealth'
import { IconEdit } from '@consta/uikit/IconEdit'
import { TextField } from '@consta/uikit/TextField'
import { Text } from '@consta/uikit/Text'
import { Select } from '@consta/uikit/Select'
import Template from './components/Template/Template'

type Item = {
  label: string
  id: number
}

const items: Item[] = [
  {
    label: 'Первый',
    id: 1,
  },
  {
    label: 'Второй',
    id: 2,
  },
  {
    label: 'Третий',
    id: 3,
  },
]

function App() {
  const dispatch = useAppDispatch()
  const [tempName, setTempName] = useState('')
  const [values, setValues] = useState<Item | null>()

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
          {data.objTemplate.map((template: ITemplate) => (
            <Template
              template={template}
              key={template.id}
            />
          ))}
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
            value="Наименование шаблона"
            label="Шаблон наименование короткое"
            labelPosition="top"
            size="s"
          />
          <TextField
            value="Описание шаблона"
            label="Описание"
            labelPosition="top"
            size="s"
          />
          <div>
            <Text
              as="div"
              align="left"
              lineHeight="l"
              size="s"
              view="secondary"
            >
              ID
            </Text>
            <Text
              as="div"
              align="left"
              lineHeight="l"
              size="m"
              view="primary"
            >
              4
            </Text>
          </div>
        </Tree>
        <Tree
          title="Атрибуты"
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
          <div>
            <Text
              as="div"
              align="left"
              lineHeight="l"
              size="s"
              view="secondary"
            >
              Атрибут 1
            </Text>
            <Text
              as="div"
              align="left"
              lineHeight="l"
              size="s"
              view="primary"
            >
              Атрибут
            </Text>
          </div>
          <div>
            <Text
              as="div"
              align="left"
              lineHeight="l"
              size="s"
              view="secondary"
            >
              Атрибут 2
            </Text>
            <Text
              as="div"
              align="left"
              lineHeight="l"
              size="s"
              view="primary"
            >
              Атрибут
            </Text>
          </div>
          <div>
            <Text
              as="div"
              align="left"
              lineHeight="l"
              size="s"
              view="secondary"
            >
              Атрибут 3
            </Text>
            <Text
              as="div"
              align="left"
              lineHeight="l"
              size="s"
              view="primary"
            >
              Атрибут
            </Text>
          </div>
          <div>
            <Text
              as="div"
              align="left"
              lineHeight="l"
              size="s"
              view="secondary"
            >
              Атрибут 4
            </Text>
            <Text
              as="div"
              align="left"
              lineHeight="l"
              size="s"
              view="primary"
            >
              Атрибут
            </Text>
          </div>
        </Tree>

        <Tree title="Параметры атрибута">
          <TextField
            value="String"
            label="Код"
            labelPosition="top"
            size="s"
          />
          <TextField
            value="27.04.2023"
            label="Дата создания"
            labelPosition="top"
            size="s"
          />
          <Select
            placeholder="Группа атрибутов"
            label="Группа"
            size="s"
            items={items}
            value={values}
            onChange={({ value }) => setValues(value)}
          />
          <TextField
            value="Новый атрибут"
            label="Название атрибута"
            labelPosition="top"
            size="s"
          />
          <TextField
            label="Описание атрибута"
            type="textarea"
            rows={4}
            cols={30}
            size="s"
            value="Новый атрибут"
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
