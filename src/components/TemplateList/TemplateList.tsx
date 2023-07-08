import React, { useEffect } from 'react';
import { IconHealth } from '@consta/uikit/IconHealth';
import { IconEdit } from '@consta/uikit/IconEdit';
import { objTemplate, Unit } from '../../graphql/types/types';
import Template from '../Template/Template';
import TemplateLayout from '../TemplateLayout/TemplateLayout';
import { useQuery } from '@apollo/client';
import { GET_OBJ_TEMPLATE } from '../../graphql/objTemplate';
import { Loader } from '@consta/uikit/Loader';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { setObjTemplates } from '../../store/Reducers/ObjTemplateReducer/ObjTemplateSlice';
import { GET_UNITS } from '../../graphql/units';
import { setUnitList } from '../../store/Reducers/UnitReducer/UnitReducer';

interface ObjTemplateData {
  objTemplate: objTemplate[];
}
interface UnitsData {
  nodes: Unit[];
  totalCount: number;
}

interface UnitsQueryData {
  unit: UnitsData;
}

const TemplateList = () => {
  const dispatch = useAppDispatch();
  const templates = useAppSelector((state) => state.ObjTemplateSlice.objTemplates);
  const activeTemplate = useAppSelector((state) => state.ObjTemplateSlice.activeTemplate);
  const { data, loading, error } = useQuery<ObjTemplateData>(GET_OBJ_TEMPLATE);
  const { data: unitsData, loading: unitsLoading, error: unitsError } = useQuery<UnitsQueryData>(GET_UNITS);
  if (error) return <div>{`Error! ${error.message}`}</div>;

  if (loading || unitsLoading) {
    return (
      <LoaderWrapper>
        <Loader size="m" />
      </LoaderWrapper>
    );
  } else {
    if (data?.objTemplate) {
      dispatch(setObjTemplates(data?.objTemplate));
    }
    if (unitsData?.unit.nodes) {
      dispatch(setUnitList(unitsData?.unit.nodes));
    }
  }
  return (
    <TemplateLayout
      bgColor="#23272a"
      title="Шаблоны"
      firstHeaderIcon={<IconHealth size="s" view="secondary" />}
      secondHeaderIcon={<IconEdit size="s" view="secondary" />}
    >
      {templates?.map((template: objTemplate) => (
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
