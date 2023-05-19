import React, { useEffect, useState } from 'react';
import { IconEdit } from '@consta/uikit/IconEdit';
import { IconTrash } from '@consta/uikit/IconTrash';
import { TextField } from '@consta/uikit/TextField';
import { Text } from '@consta/uikit/Text';
import TemplateLayout from '../TemplateLayout/TemplateLayout';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { objTemplate } from '../../graphql/types/types';
import { changeTemplateData } from '../../store/Reducers/ObjTemplateReducer/ObjTemplateSlice';
import { Button } from '@consta/uikit/Button';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { UPDATE_OBJ_TEMPLATE } from '../../graphql/updateObjTemplate';
import { GET_OBJ_TEMPLATE } from '../../graphql/objTemplate';

const Information = () => {
  const [updateObjTemplate, { loading: updateObjTemplateLoading }] = useMutation(UPDATE_OBJ_TEMPLATE, {
    refetchQueries: [{ query: GET_OBJ_TEMPLATE }],
  });

  const dispatch = useAppDispatch();
  const activeTemplate: objTemplate | null = useAppSelector((state) => {
    const templates = state.ObjTemplateSlice.objTemplates;
    const activeTemp = templates.filter((template) => template.id === state.ObjTemplateSlice.activeTemplate);
    if (activeTemp.length > 0) {
      return activeTemp[0];
    } else {
      return null;
    }
  });

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [templateName, setTemplateName] = useState<string | null>(activeTemplate?.shortName || '');
  const [templateDesc, setTemplateDesc] = useState<string | null>(activeTemplate?.fullName || '');

  useEffect(() => {
    setTemplateName(activeTemplate?.shortName || '');
    setTemplateDesc(activeTemplate?.fullName || '');
  }, [activeTemplate]);
  const handleOnSave = () => {
    dispatch(
      changeTemplateData({
        templateId: activeTemplate?.id,
        key: 'shortName',
        value: templateName || '',
      }),
    );
    dispatch(
      changeTemplateData({
        templateId: activeTemplate?.id,
        key: 'fullName',
        value: templateDesc || '',
      }),
    );
    setIsEdit(false);
    updateObjTemplate({
      variables: {
        Input: {
          id: activeTemplate?.id,
          name: templateName,
          fullName: templateDesc,
          shortName: templateName,
          code: 'test',
          groupId: '1c868ead-b9de-4d1e-9f6e-4a74eb463553',
        },
      },
    });
  };

  const handleOnCancel = () => {
    setTemplateName(activeTemplate?.shortName || '');
    setTemplateDesc(activeTemplate?.fullName || '');
    setIsEdit(false);
  };

  return (
    <TemplateLayout
      title="Сведения"
      firstHeaderIcon={
        <Button onlyIcon size="xs" iconLeft={IconEdit} form="round" view="ghost" onClick={() => setIsEdit(!isEdit)} />
      }
      secondHeaderIcon={<Button onlyIcon size="xs" iconLeft={IconTrash} form="round" view="ghost" />}
    >
      <TextField
        value={templateName}
        onChange={({ value }) => {
          setTemplateName(value);
        }}
        disabled={!isEdit}
        label="Шаблон наименование короткое"
        labelPosition="top"
        size="s"
      />
      <TextField
        value={templateDesc}
        onChange={({ value }) => {
          setTemplateDesc(value);
        }}
        disabled={!isEdit}
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
      <ButtonsContainer>
        <Button label="Сохранить" size="s" onClick={handleOnSave} loading={updateObjTemplateLoading} />
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

export default Information;
