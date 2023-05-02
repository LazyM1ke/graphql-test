import React, { useState } from 'react'
import { CollapseGroup } from '@consta/uikit/CollapseGroup'
import { useQuery } from '@apollo/client'
import { GET_OBJ_TEMPLATE } from '../../graphql/objTemplate'
import { objTemplate } from '../../graphql/types/types'
import { Collapse } from '@consta/uikit/Collapse'

type Item = {
  label: string
  content: string
}
const items: Item[] = [
  {
    label: 'Пункт раз',
    content: 'Содержимое блока раз',
  },
  {
    label: 'Пункт два',
    content: 'Содержимое блока два',
  },
  {
    label: 'Пункт три',
    content: 'Содержимое блока три',
  },
]
function TreeItem() {
  const [isOpen, setOpen] = useState(false)
  const { data, loading, error } = useQuery(GET_OBJ_TEMPLATE)

  const newItems: Item[] = data.objTemplate.map((temp: objTemplate) => ({
    label: temp.name,
    content: temp.paramTemplates?.map((param) => param.name),
  }))

  return (
    <div>
      {/*{data.objTemplate.map((item: objTemplate) => (*/}
      {/*  <Collapse*/}
      {/*    key={item.id}*/}
      {/*    isOpen={isOpen}*/}
      {/*    onClick={() => setOpen(!isOpen)}*/}
      {/*    label={item.name}*/}
      {/*    iconPosition="right"*/}
      {/*    horizontalSpace="m"*/}
      {/*    size="s"*/}
      {/*  >*/}
      {/*    {item.paramTemplates?.length*/}
      {/*      ? item.paramTemplates.map((param) => <div key={param.id}>{param.name}</div>)*/}
      {/*      : null}*/}
      {/*  </Collapse>*/}
      {/*))}*/}
      <CollapseGroup
        items={newItems}
        size="s"
        horizontalSpace="s"
        iconPosition="right"
      />
    </div>
  )
}

export default TreeItem
