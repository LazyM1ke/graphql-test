import React from 'react'
import TreeIcon from '../TreeIcon/TreeIcon'
import { IconDocBlank } from '@consta/uikit/IconDocBlank'
import TemplateProps from './TemplateProps.types'
import { Collapse } from '@consta/uikit/Collapse'
import styled from 'styled-components'

function Template({ template }: TemplateProps) {
  return (
    <TemplateContainer>
      <TreeIcon />
      <Collapse
        iconPosition="right"
        label={
          <CollapseContainer>
            <IconDocBlank
              view="secondary"
              size="s"
            />
            {template.name}
          </CollapseContainer>
        }
      ></Collapse>
    </TemplateContainer>
  )
}

const TemplateContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 12px;
`

const CollapseContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export default Template
