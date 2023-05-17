import React from 'react';
import styled from 'styled-components';
import { Text } from '@consta/uikit/Text';
import TreeProps from './TreeProps.types';

const Tree = ({ title, firstHeaderIcon, secondHeaderIcon, children }: TreeProps) => {
  return (
    <TreeContainer>
      <TreeHeader>
        {firstHeaderIcon}
        {secondHeaderIcon}
      </TreeHeader>
      <TreeContent>
        <TreeTitleContainer>
          <TreeTitle transform="uppercase" size="s">
            {title}
          </TreeTitle>
        </TreeTitleContainer>
        {children}
      </TreeContent>
    </TreeContainer>
  );
};

const TreeHeader = styled.div`
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

export const TreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 100%;
  background: #23272a;
  height: 100vh;
  overflow: scroll;
  position: relative;
`;

const TreeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 100%;
  background: #23272a;
  padding: 0 9px;
`;
const TreeTitle = styled(Text)`
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: white;
`;
const TreeTitleContainer = styled.div`
  padding: 14px 16px 22px;
`;

export default Tree;
