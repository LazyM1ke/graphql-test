import React, { useState } from 'react';
import { TextField } from '@consta/uikit/TextField';
import { Select } from '@consta/uikit/Select';
import TemplateLayout from '../TemplateLayout/TemplateLayout';
import { Checkbox } from '@consta/uikit/Checkbox';
import styled from 'styled-components';
import { Button } from '@consta/uikit/Button';

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

  const [isActive, setIsActive] = useState<boolean>(false);
  const [isSystem, setIsSystem] = useState<boolean>(false);
  const [isArchive, setIsArchive] = useState<boolean>(false);

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
      <CheckboxiesContainer>
        <Checkbox checked={isActive} onChange={() => setIsActive(!isActive)} label="Активный" />
        <Checkbox checked={isSystem} onChange={() => setIsSystem(!isSystem)} label="Системный" />
        <Checkbox checked={isArchive} onChange={() => setIsArchive(!isArchive)} label="Восстановленный" />
      </CheckboxiesContainer>
      <ButtonsContainer>
        <Button label="Сохранить" size="s" />
        <Button label="Отменить" view="secondary" size="s" />
      </ButtonsContainer>
    </TemplateLayout>
  );
};

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 15px;
  justify-content: flex-end;
`;

const CheckboxiesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export default AttributeParams;
