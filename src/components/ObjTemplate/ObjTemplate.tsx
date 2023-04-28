import React from 'react'
import { objTemplate } from '../../graphql/types/types'
import styled from 'styled-components'
import { useAppDispatch } from '../../store/hooks/hooks'
import { setActiveObjTemplate } from '../../store/Reducers/ObjTemplateReducer/ObjTemplateSlice'

interface ObjTemplateProps extends objTemplate {
  idx: number
}

const ObjTemplate: React.FC<ObjTemplateProps> = ({ ...props }) => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(setActiveObjTemplate(props.id))
  }
  return (
    <ObjTemplateWrapper>
      <button onClick={handleClick}>+</button>
      <div>
        {props.idx + 1}) {props.name} - [{props.code}]
      </div>
      {props.paramTemplates && props.paramTemplates.length
        ? props.paramTemplates.map((param) => <div>{param.name}</div>)
        : null}
    </ObjTemplateWrapper>
  )
}

const ObjTemplateWrapper = styled.div`
  padding: 10px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  gap: 8px;
`

export default ObjTemplate
