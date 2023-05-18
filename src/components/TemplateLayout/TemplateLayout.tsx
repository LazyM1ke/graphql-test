import React from 'react';
import styled from 'styled-components';
import { Text } from '@consta/uikit/Text';
import TemplateLayoutProps from './TemplateLayoutProps.types';

const TemplateLayout = ({ title, firstHeaderIcon, secondHeaderIcon, children, bgColor }: TemplateLayoutProps) => {
  return (
    <TemplateLayoutContainer>
      <TemplateLayoutHeader>
        {firstHeaderIcon}
        {secondHeaderIcon}
      </TemplateLayoutHeader>
      <TemplateLayoutContent>
        <TemplateLayoutTitleContainer>
          <TemplateLayoutTitle transform="uppercase" size="s">
            {title}
          </TemplateLayoutTitle>
        </TemplateLayoutTitleContainer>
        {children}
      </TemplateLayoutContent>
    </TemplateLayoutContainer>
  );
};

const TemplateLayoutHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px;
  padding: 11px 15px;
  height: 32px;
  background: #4d525b;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.08), 0 2px 12px rgba(0, 0, 0, 0.32);
  svg {
    cursor: pointer;
  }
`;

export const TemplateLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 100%;
  background-color: #23272a;
  height: 100vh;
  overflow: scroll;
  position: relative;
`;

const TemplateLayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 100%;
  background: #23272a;
  //padding: 0 9px;
`;
const TemplateLayoutTitle = styled(Text)`
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: white;
`;
const TemplateLayoutTitleContainer = styled.div`
  padding: 14px 16px 22px;
`;

export default TemplateLayout;
