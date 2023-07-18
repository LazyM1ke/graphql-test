import React from 'react';
import { Text } from '@consta/uikit/Text';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { Button } from '@consta/uikit/Button';
import styled from 'styled-components';
import { IconClose } from '@consta/uikit/IconClose';
import { setDeleteModal, setParamLoading } from '../../store/Reducers/AttributeParamReducer/ObjParamReducer';
import { useMutation } from '@apollo/client';
import { DELETE_PARAM_TEMPLATE } from '../../graphql/deleteParamTemplate';
import { GET_PARAMS_TEMPLATES } from '../../graphql/paramTemplate';

const DeleteModal = () => {
  const dispatch = useAppDispatch();

  const [deleteParamTemplate, { loading, error }] = useMutation(DELETE_PARAM_TEMPLATE, {
    refetchQueries: [{ query: GET_PARAMS_TEMPLATES }],
  });

  const activeAttribute = useAppSelector((state) => {
    const attributes = state.objParamSlice.paramsTemplates;
    const activeAttr = attributes.filter((attribute) => attribute.id === state.objParamSlice.activeParam);
    if (activeAttr.length > 0) {
      return activeAttr[0];
    } else {
      return null;
    }
  });

  const handleDeleteParam = () => {
    dispatch(setParamLoading(true));
    deleteParamTemplate({
      variables: {
        input: [activeAttribute?.id],
      },
    }).then(() => {
      dispatch(setParamLoading(false));
    });
    dispatch(setDeleteModal(false));
  };

  return (
    <DeleteModalContainer>
      <DeleteModalTitle>
        <Text>Вы действительно хотите удалить атрибут {activeAttribute?.name} ?</Text>
        <StyledCloseIcon view="secondary" size="s" onClick={() => dispatch(setDeleteModal(false))} />
      </DeleteModalTitle>
      <DeleteModalButtons>
        <Button label="Удалить" view="ghost" size="s" onClick={handleDeleteParam} loading={loading} />
        <Button label="Отмена" view="ghost" size="s" onClick={() => dispatch(setDeleteModal(false))} />
      </DeleteModalButtons>
    </DeleteModalContainer>
  );
};

export const StyledCloseIcon = styled(IconClose)`
  cursor: pointer;
`;

export const DeleteModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DeleteModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 12px;
  border-radius: 8px;
  background-color: #ff4443;
`;

export const DeleteModalButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
export default DeleteModal;
