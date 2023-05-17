import React from 'react';
import Tree from '../Tree/Tree';
import { IconHealth } from '@consta/uikit/IconHealth';
import { IconEdit } from '@consta/uikit/IconEdit';
import { Text } from '@consta/uikit/Text';

const Attributes = () => {
  return (
    <Tree
      title="Атрибуты"
      firstHeaderIcon={<IconHealth size="s" view="secondary" />}
      secondHeaderIcon={<IconEdit size="s" view="secondary" />}
    >
      <div>
        <Text as="div" align="left" lineHeight="l" size="s" view="secondary">
          Атрибут 1
        </Text>
        <Text as="div" align="left" lineHeight="l" size="s" view="primary">
          Атрибут
        </Text>
      </div>
      <div>
        <Text as="div" align="left" lineHeight="l" size="s" view="secondary">
          Атрибут 2
        </Text>
        <Text as="div" align="left" lineHeight="l" size="s" view="primary">
          Атрибут
        </Text>
      </div>
      <div>
        <Text as="div" align="left" lineHeight="l" size="s" view="secondary">
          Атрибут 3
        </Text>
        <Text as="div" align="left" lineHeight="l" size="s" view="primary">
          Атрибут
        </Text>
      </div>
      <div>
        <Text as="div" align="left" lineHeight="l" size="s" view="secondary">
          Атрибут 4
        </Text>
        <Text as="div" align="left" lineHeight="l" size="s" view="primary">
          Атрибут
        </Text>
      </div>
    </Tree>
  );
};

export default Attributes;
