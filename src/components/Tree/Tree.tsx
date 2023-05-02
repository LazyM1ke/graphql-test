import React from 'react'
import { IconHealth } from '@consta/uikit/IconHealth'
import { IconEdit } from '@consta/uikit/IconEdit'
import styled from 'styled-components'
import { Text } from '@consta/uikit/Text'
import TreeProps from './TreeProps.types'

function Tree({ children }: TreeProps) {
  return (
    <TreeContainer>
      <TreeHeader>
        <IconHealth
          size="s"
          view="secondary"
        />
        <IconEdit
          size="s"
          view="secondary"
        />
      </TreeHeader>
      <TreeTitleContainer>
        <TreeTitle transform="uppercase">Шаблоны</TreeTitle>
      </TreeTitleContainer>
      {children}
    </TreeContainer>
  )
}

const TreeHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px;
  padding: 11px 15px;
  background: #4d525b;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.08), 0px 2px 12px rgba(0, 0, 0, 0.32);
`

const TreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 324px;
  background: #23272a;
`
const TreeTitle = styled(Text)`
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
`
const TreeTitleContainer = styled.div`
  padding: 14px 16px 22px;
`

export default Tree
