import React, { useState } from 'react';
import TreeIcon from '../TreeIcon/TreeIcon';
import TemplateProps from './TemplateProps.types';
import { Collapse } from '@consta/uikit/Collapse';
import styled from 'styled-components';
import { IconFolders } from '@consta/uikit/IconFolders';
import { Text } from '@consta/uikit/Text';
import { useAppDispatch } from '../../store/hooks/hooks';
import { setActiveObjTemplate } from '../../store/Reducers/ObjTemplateReducer/ObjTemplateSlice';

const Template = ({ template, activeTemplate }: TemplateProps) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const handleOnclick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, templateId: string) => {
    e.preventDefault();
    dispatch(setActiveObjTemplate(templateId));
  };
  return (
    <>
      {template.paramTemplates && template.paramTemplates.length > 0 ? (
        <TemplateContainer
          activeTemplate={activeTemplate}
          currentTemplate={template.id}
          onClick={(e) => handleOnclick(e, template.id)}
        >
          <CollapseWrapper
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            iconPosition="right"
            label={
              <CollapseLabel>
                <TreeIcon />
                <IconFolders view="secondary" size="xs" />
                <Text view="secondary" size="s">
                  {template.name}
                </Text>
              </CollapseLabel>
            }
          >
            {template.paramTemplates?.length &&
              isOpen &&
              template.paramTemplates.map((paramTemplate) => (
                <Template activeTemplate={activeTemplate} key={paramTemplate.id} template={paramTemplate} />
              ))}
          </CollapseWrapper>
        </TemplateContainer>
      ) : (
        <TemplateContainer
          activeTemplate={activeTemplate}
          currentTemplate={template.id}
          onClick={(e) => handleOnclick(e, template.id)}
        >
          <IconFolders view="secondary" size="xs" />
          <Text view={activeTemplate === template.id ? 'primary' : 'secondary'} size="s">
            {template.name}
          </Text>
        </TemplateContainer>
      )}
    </>
  );
};

const TemplateContainer = styled.div<{ activeTemplate: string; currentTemplate: string }>`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 12px;
  padding: 8px 10px;
  cursor: pointer;
  background-color: ${(props) => (props.activeTemplate === props.currentTemplate ? '#919598' : 'none')};
`;
const CollapseWrapper = styled(Collapse)`
  width: 100%;
`;

const CollapseLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export default Template;
