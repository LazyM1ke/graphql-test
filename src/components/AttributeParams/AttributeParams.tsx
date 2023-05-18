import React, { useState } from 'react';
import { TextField } from '@consta/uikit/TextField';
import { Select } from '@consta/uikit/Select';
import TemplateLayout from '../TemplateLayout/TemplateLayout';

type Item = {
  label: string;
  id: number;
};

const items: Item[] = [
  {
    label: 'Первый',
    id: 1,
  },
  {
    label: 'Второй',
    id: 2,
  },
  {
    label: 'Третий',
    id: 3,
  },
];
const AttributeParams = () => {
  const [values, setValues] = useState<Item | null>();

  return (
    <TemplateLayout title="Параметры атрибута">
      <TextField value="String" label="Код" labelPosition="top" size="s" />
      <TextField value="27.04.2023" label="Дата создания" labelPosition="top" size="s" />
      <Select
        placeholder="Группа атрибутов"
        label="Группа"
        size="s"
        items={items}
        value={values}
        onChange={({ value }) => setValues(value)}
      />
      <TextField value="Новый атрибут" label="Название атрибута" labelPosition="top" size="s" />
      <TextField label="Описание атрибута" type="textarea" rows={4} cols={30} size="s" value="Новый атрибут" />
    </TemplateLayout>
  );
};

export default AttributeParams;
