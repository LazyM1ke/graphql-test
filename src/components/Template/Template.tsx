import React, { useState } from 'react';
import TreeIcon from '../TreeIcon/TreeIcon';
import TemplateProps from './TemplateProps.types';
import { Collapse } from '@consta/uikit/Collapse';
import styled from 'styled-components';
import { IconFolders } from '@consta/uikit/IconFolders';
import { Text } from '@consta/uikit/Text';

const Template = ({ template }: TemplateProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {template.paramTemplates && template.paramTemplates.length > 0 ? (
        <TemplateContainer>
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
                <Template key={paramTemplate.id} template={paramTemplate} />
              ))}
          </CollapseWrapper>
        </TemplateContainer>
      ) : (
        <TemplateContainer>
          <IconFolders view="secondary" size="xs" />
          <Text view="secondary" size="s">
            {template.name}
          </Text>
        </TemplateContainer>
      )}
    </>
  );
};

const TemplateContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 12px;
  padding: 0 10px;
  cursor: pointer;
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
