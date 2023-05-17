import React from 'react';
import { IconHealth } from '@consta/uikit/IconHealth';
import { IconEdit } from '@consta/uikit/IconEdit';
import { objTemplate } from '../../graphql/types/types';
import Template from '../Template/Template';
import Tree from '../Tree/Tree';
import { useQuery } from '@apollo/client';
import { GET_OBJ_TEMPLATE } from '../../graphql/objTemplate';
import { Loader } from '@consta/uikit/Loader';
import styled from 'styled-components';

interface ObjTemplateData {
  objTemplate: objTemplate[];
}

const TemplateList = () => {
  const { data, loading, error } = useQuery<ObjTemplateData>(GET_OBJ_TEMPLATE);
  console.log(data);

  if (error) return <div>{`Error! ${error.message}`}</div>;

  if (loading) {
    return (
      <LoaderWrapper>
        <Loader size="m" />
      </LoaderWrapper>
    );
  }

  return (
    <Tree
      title="Шаблоны"
      firstHeaderIcon={<IconHealth size="s" view="secondary" />}
      secondHeaderIcon={<IconEdit size="s" view="secondary" />}
    >
      {data?.objTemplate.map((template: objTemplate) => (
        <Template template={template} key={template.id} />
      ))}
    </Tree>
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
