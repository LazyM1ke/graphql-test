import React from 'react';
import { Text } from '@consta/uikit/Text';
import { IconArrowRight } from '@consta/uikit/IconArrowRight';
import styled from 'styled-components';
import AttributeProps from './AttributeProps.types';
import { setActiveParam } from '../../store/Reducers/AttributeParamReducer/ObjParamReducer';
import { useAppDispatch } from '../../store/hooks/hooks';

const Attribute = ({ param, activeParam, idx }: AttributeProps) => {
  const dispatch = useAppDispatch();
  const handleOnclick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, paramId: string) => {
    e.preventDefault();
    dispatch(setActiveParam(paramId));
  };

  return (
    <AttributeContainer activeParam={activeParam} currentParam={param.id} onClick={(e) => handleOnclick(e, param?.id)}>
      <div>
        <Text as="div" align="left" lineHeight="l" size="s" view="secondary">
          Атрибут {idx + 1}
        </Text>
        <Text as="div" align="left" lineHeight="l" size="s" view="primary">
          {param.name}
        </Text>
      </div>
      <IconArrowRight size="xs" />
    </AttributeContainer>
  );
};

const AttributeContainer = styled.div<{ currentParam: string; activeParam: string }>`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${(props) => (props.activeParam === props.currentParam ? '#919598' : 'none')};
`;
export default Attribute;
