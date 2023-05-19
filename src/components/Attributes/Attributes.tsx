import React from 'react';
import TemplateLayout from '../TemplateLayout/TemplateLayout';
import { IconHealth } from '@consta/uikit/IconHealth';
import { Text } from '@consta/uikit/Text';
import { IconTrash } from '@consta/uikit/IconTrash';

const Attributes = () => {
  return (
    <TemplateLayout
      title="Атрибуты"
      firstHeaderIcon={<IconHealth size="s" view="secondary" />}
      secondHeaderIcon={<IconTrash size="s" view="secondary" />}
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
    </TemplateLayout>
  );
};

export default Attributes;
