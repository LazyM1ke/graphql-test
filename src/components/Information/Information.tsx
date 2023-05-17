import React from 'react';
import { IconEdit } from '@consta/uikit/IconEdit';
import { IconTrash } from '@consta/uikit/IconTrash';
import { TextField } from '@consta/uikit/TextField';
import { Text } from '@consta/uikit/Text';
import Tree from '../Tree/Tree';

const Information = () => {
  return (
    <Tree
      title="Сведения"
      firstHeaderIcon={<IconEdit size="s" view="secondary" />}
      secondHeaderIcon={<IconTrash size="s" view="secondary" />}
    >
      <TextField value="Наименование шаблона" label="Шаблон наименование короткое" labelPosition="top" size="s" />
      <TextField value="Описание шаблона" label="Описание" labelPosition="top" size="s" />
      <div>
        <Text as="div" align="left" lineHeight="l" size="s" view="secondary">
          ID
        </Text>
        <Text as="div" align="left" lineHeight="l" size="m" view="primary">
          4
        </Text>
      </div>
    </Tree>
  );
};

export default Information;
