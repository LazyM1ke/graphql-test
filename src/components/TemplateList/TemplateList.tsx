import React from 'react';
import { IconHealth } from '@consta/uikit/IconHealth';
import { IconEdit } from '@consta/uikit/IconEdit';
import { objTemplate } from '../../graphql/types/types';
import Template from '../Template/Template';
import TemplateLayout from '../TemplateLayout/TemplateLayout';
import { useQuery } from '@apollo/client';
import { GET_OBJ_TEMPLATE } from '../../graphql/objTemplate';
import { Loader } from '@consta/uikit/Loader';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { setObjTemplates } from '../../store/Reducers/ObjTemplateReducer/ObjTemplateSlice';

interface ObjTemplateData {
  objTemplate: objTemplate[];
}

const TemplateList = () => {
  const dispatch = useAppDispatch();
  const activeTemplate = useAppSelector((state) => state.ObjTemplateSlice.activeTemplate);
  const { data, loading, error } = useQuery<ObjTemplateData>(GET_OBJ_TEMPLATE);

  if (error) return <div>{`Error! ${error.message}`}</div>;

  if (loading) {
    return (
      <LoaderWrapper>
        <Loader size="m" />
      </LoaderWrapper>
    );
  } else {
    if (data?.objTemplate) {
      dispatch(setObjTemplates(data?.objTemplate));
    }
  }

  return (
    <TemplateLayout
      title="Шаблоны"
      firstHeaderIcon={<IconHealth size="s" view="secondary" />}
      secondHeaderIcon={<IconEdit size="s" view="secondary" />}
    >
      {data?.objTemplate.map((template: objTemplate) => (
        <Template activeTemplate={activeTemplate} template={template} key={template.id} />
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

export default TemplateList;
