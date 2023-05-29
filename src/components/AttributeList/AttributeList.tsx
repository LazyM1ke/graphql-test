import React from 'react';
import TemplateLayout from '../TemplateLayout/TemplateLayout';
import { IconHealth } from '@consta/uikit/IconHealth';
import { IconTrash } from '@consta/uikit/IconTrash';
import Attribute from '../Attribute/Attribute';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks/hooks';
import { Loader } from '@consta/uikit/Loader';
import DeleteModal from '../DeleteModal/DeleteModal';

const AttributeList = () => {
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
      title="Атрибуты"
      firstHeaderIcon={<IconHealth size="s" view="secondary" />}
      secondHeaderIcon={<IconTrash size="s" view="secondary" />}
    >
      {params.map((param, idx) => (
        <Attribute idx={idx} key={param.id} param={param} activeParam={activeParam} />
      ))}
      <DeleteModal />
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
