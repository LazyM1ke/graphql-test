import React, { useState } from 'react';
import TemplateLayout from '../TemplateLayout/TemplateLayout';
import { IconHealth } from '@consta/uikit/IconHealth';
import { IconTrash } from '@consta/uikit/IconTrash';
import Attribute from '../Attribute/Attribute';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { Loader } from '@consta/uikit/Loader';
import { Button } from '@consta/uikit/Button';
import { setDeleteModal } from '../../store/Reducers/AttributeParamReducer/ObjParamReducer';

const AttributeList = () => {
  const dispatch = useAppDispatch();
  const activeParam = useAppSelector((state) => state.objParamSlice.activeParam);
  const params = useAppSelector((state) => state.objParamSlice.paramsTemplates);
  const isParamLoading = useAppSelector((state) => state.objParamSlice.isLoading);
  if (isParamLoading) {
    return (
      <LoaderWrapper>
        <Loader size="m" />
      </LoaderWrapper>
    );
  }

  return (
    <TemplateLayout
      bgColor="#161A1D"
      title="Атрибуты"
      firstHeaderIcon={<Button onlyIcon size="xs" iconLeft={IconHealth} form="round" view="ghost" />}
      secondHeaderIcon={
        <Button
          onlyIcon
          size="xs"
          iconLeft={IconTrash}
          form="round"
          view="ghost"
          onClick={() => dispatch(setDeleteModal(true))}
        />
      }
    >
      {params.map((param, idx) => (
        <Attribute idx={idx} key={param.id} param={param} activeParam={activeParam} />
      ))}
    </TemplateLayout>
  );
};

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #23272a;
`;

export default AttributeList;
