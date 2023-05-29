import React, { useEffect, useState } from 'react';
import { TextField } from '@consta/uikit/TextField';
import { Select } from '@consta/uikit/Select';
import TemplateLayout from '../TemplateLayout/TemplateLayout';
import { Checkbox } from '@consta/uikit/Checkbox';
import styled from 'styled-components';
import { Button } from '@consta/uikit/Button';
import { useAppSelector } from '../../store/hooks/hooks';
import moment from 'moment';

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
  const activeAttribute = useAppSelector((state) => {
    const attributes = state.objParamSlice.paramsTemplates;
    const activeAttr = attributes.filter((attribute) => attribute.id === state.objParamSlice.activeParam);
    if (activeAttr.length > 0) {
      return activeAttr[0];
    } else {
      return null;
    }
  });
  const groupValues = useAppSelector((state) => state.objParamSlice.paramsTemplates.map((group) => group?.paramGroup));
  const [createdAt, setCreatedAt] = useState<Date | null>(activeAttribute?.objTemplate?.createdAt || null);
  const [group, setGroup] = useState<Item | null>();

  const [paramCode, setParamCode] = useState<string | null>(activeAttribute?.code || '');
  const [paramName, setParamName] = useState<string | null>(activeAttribute?.name || '');
  const [paramDesc, setParamDesc] = useState<string | null>(activeAttribute?.fullName || '');

  const [isActive, setIsActive] = useState<boolean>(activeAttribute?.isActive || false);
  const [isSystem, setIsSystem] = useState<boolean>(activeAttribute?.isSystem || false);
  const [isArchive, setIsArchive] = useState<boolean>(activeAttribute?.isArchive || false);

  useEffect(() => {
    setParamCode(activeAttribute?.code || '');
    setParamName(activeAttribute?.name || '');
    setParamName(activeAttribute?.name || '');
    setIsActive(activeAttribute?.isActive || false);
    setIsSystem(activeAttribute?.isSystem || false);
    setIsArchive(activeAttribute?.isArchive || false);
    setCreatedAt(activeAttribute?.objTemplate?.createdAt || null);
  }, [activeAttribute]);

  const handleOnCancel = () => {
    setParamCode(activeAttribute?.code || '');
    setParamName(activeAttribute?.name || '');
    setParamName(activeAttribute?.name || '');
    setIsActive(activeAttribute?.isActive || false);
    setIsSystem(activeAttribute?.isSystem || false);
    setIsArchive(activeAttribute?.isArchive || false);
    setCreatedAt(activeAttribute?.objTemplate?.createdAt || null);
  };

  return (
    <TemplateLayout title="Параметры атрибута">
      <TextField
        value={paramCode}
        label="Код"
        labelPosition="top"
        size="s"
        onChange={({ value }) => setParamCode(value)}
      />
      <TextField
        value={moment(createdAt).format('DD.MM.YYYY')}
        label="Дата создания"
        labelPosition="top"
        size="s"
        // onChange={({ value }) => setCreatedAt(value)}
      />
      <Select
        placeholder="Группа атрибутов"
        label="Группа"
        size="s"
        items={items}
        value={group}
        onChange={({ value }) => setGroup(value)}
      />
      <TextField
        value={paramName}
        label="Название атрибута"
        labelPosition="top"
        size="s"
        onChange={({ value }) => setParamName(value)}
      />
      <TextField
        label="Описание атрибута"
        type="textarea"
        rows={4}
        cols={30}
        size="s"
        value={paramDesc}
        onChange={({ value }) => setParamDesc(value)}
      />
      <CheckboxiesContainer>
        <Checkbox checked={isActive} onChange={() => setIsActive(!isActive)} label="Активный" />
        <Checkbox checked={isSystem} onChange={() => setIsSystem(!isSystem)} label="Системный" />
        <Checkbox checked={isArchive} onChange={() => setIsArchive(!isArchive)} label="Восстановленный" />
      </CheckboxiesContainer>
      <ButtonsContainer>
        <Button label="Сохранить" size="s" />
        <Button label="Отменить" view="secondary" size="s" onClick={handleOnCancel} />
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
