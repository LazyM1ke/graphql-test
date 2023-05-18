import React, { useState } from 'react';
import { IconEdit } from '@consta/uikit/IconEdit';
import { IconTrash } from '@consta/uikit/IconTrash';
import { TextField } from '@consta/uikit/TextField';
import { Text } from '@consta/uikit/Text';
import TemplateLayout from '../TemplateLayout/TemplateLayout';
import { useAppSelector } from '../../store/hooks/hooks';
import { objTemplate } from '../../graphql/types/types';

const Information = () => {
  const activeTemplate: objTemplate | null = useAppSelector((state) => {
    const templates = state.ObjTemplateSlice.objTemplates;
    const activeTemp = templates.filter((template) => template.id === state.ObjTemplateSlice.activeTemplate);
    if (activeTemp.length > 0) {
      return activeTemp[0];
    } else {
      return null;
    }
  });

  // const [templateName, setTemplateName] = useState(activeTemplate?.name);
  // const [templateDesc, setTemplateDesc] = useState<string | null>('Описание шаблона');

  return (
    <TemplateLayout
      title="Сведения"
      firstHeaderIcon={<IconEdit size="s" view="secondary" />}
      secondHeaderIcon={<IconTrash size="s" view="secondary" />}
    >
      <TextField
        value={activeTemplate?.name}
        // onChange={({ value }) => console.log(value)}
        label="Шаблон наименование короткое"
        labelPosition="top"
        size="s"
      />
      <TextField
        value={activeTemplate?.fullName}
        // onChange={({ value }) => setTemplateDesc(value)}
        label="Описание"
        labelPosition="top"
        size="s"
      />
      <div>
        <Text as="div" align="left" lineHeight="l" size="s" view="secondary">
          ID
        </Text>
        <Text as="div" align="left" lineHeight="l" size="m" view="primary">
          {activeTemplate?.id}
        </Text>
      </div>
    </TemplateLayout>
  );
};

export default Information;
