import React from 'react';
import styled from 'styled-components';
import { Text } from '@consta/uikit/Text';
import TemplateLayoutProps from './TemplateLayoutProps.types';

const TemplateLayout = ({
  title,
  firstHeaderIcon,
  secondHeaderIcon,
  children,
  padding,
  bgColor,
}: TemplateLayoutProps) => {
  return (
    <TemplateLayoutContainer $bgColor={bgColor}>
      <TemplateLayoutHeader>
        {firstHeaderIcon}
        {secondHeaderIcon}
      </TemplateLayoutHeader>
      <TemplateLayoutContent $bgColor={bgColor} $padding={padding}>
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

export const TemplateLayoutContainer = styled.div<{ $bgColor?: string }>`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 100%;
  background-color: ${(props) => props.$bgColor};
  height: 100%;
  overflow: scroll;
  position: relative;
`;

const TemplateLayoutContent = styled.div<{ $padding?: string; $bgColor?: string }>`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 100%;
  background-color: ${(props) => props.$bgColor};
  padding: ${(props) => props.$padding};
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
