import React from 'react';
import TemplateLayout from '../TemplateLayout/TemplateLayout';
import { IconHealth } from '@consta/uikit/IconHealth';
import { IconTrash } from '@consta/uikit/IconTrash';
import { useQuery } from '@apollo/client';
import { GET_PARAMS_TEMPLATES } from '../../graphql/paramTemplate';
import { paramTemplate } from '../../graphql/types/types';
import Attribute from '../Attribute/Attribute';
import { Loader } from '@consta/uikit/Loader';
import styled from 'styled-components';
import { setParamsTemplates } from '../../store/Reducers/AttributeParamReducer/ObjParamReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';

interface ParamTemplateData {
  paramTemplate: paramTemplate[];
}

const AttributeList = () => {
  const dispatch = useAppDispatch();
  const activeParam = useAppSelector((state) => state.objParamSlice.activeParam);
  const params = useAppSelector((state) => state.objParamSlice.paramsTemplates);
  const { data, loading, error } = useQuery<ParamTemplateData>(GET_PARAMS_TEMPLATES);

  if (error) return <div>{`Error! ${error.message}`}</div>;

  if (loading) {
    return (
      <LoaderWrapper>
        <Loader size="m" />
      </LoaderWrapper>
    );
  } else {
    if (data?.paramTemplate) {
      dispatch(setParamsTemplates(data?.paramTemplate));
    }
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
