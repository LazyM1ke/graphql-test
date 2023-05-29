import React from 'react';
import { Text } from '@consta/uikit/Text';
import { useAppSelector } from '../../store/hooks/hooks';
import { Button } from '@consta/uikit/Button';
import styled from 'styled-components';
import { IconClose } from '@consta/uikit/IconClose';

const DeleteModal = () => {
  const activeAttribute = useAppSelector((state) => {
    const attributes = state.objParamSlice.paramsTemplates;
    const activeAttr = attributes.filter((attribute) => attribute.id === state.objParamSlice.activeParam);
    if (activeAttr.length > 0) {
      return activeAttr[0];
    } else {
      return null;
    }
  });
  return (
    <DeleteModalContainer>
      <DeleteModalTitle>
        <Text>Вы действительно хотите удалить атрибут {activeAttribute?.name} ?</Text>
        <IconClose view="secondary" size="s" />
      </DeleteModalTitle>
      <DeleteModalButtons>
        <Button label="Удалить" view="ghost" size="s" />
        <Button label="Отмена" view="ghost" size="s" />
      </DeleteModalButtons>
    </DeleteModalContainer>
  );
};

const DeleteModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const DeleteModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 12px;
  border-radius: 8px;
  background-color: #ff4443;
`;

const DeleteModalButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
export default DeleteModal;
