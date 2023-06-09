import React, { useState } from 'react';
import { Text } from '@consta/uikit/Text';
import { TextField } from '@consta/uikit/TextField';
import { IconSearch } from '@consta/uikit/IconSearch';
import styled from 'styled-components';
import { Button } from '@consta/uikit/Button';
import HeaderProps from './HeaderProps.types';

const Header = ({ setCatalogModal }: HeaderProps) => {
  const [inputValue, setInputValue] = useState<string | null>(null);
  const handleChange = ({ value }: { value: string | null }) => setInputValue(value);

  return (
    <StyledHeader>
      <StyledText weight="bold" transform="uppercase" view="link">
        Тест
      </StyledText>
      <StyledTextField
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Поиск"
        leftSide={IconSearch}
      />
      <Button label="Справочник" size="s" onClick={() => setCatalogModal()} />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  padding: 10px 24px;
  background-color: #22272b;
`;
const StyledText = styled(Text)`
  color: #009bf5;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
`;
const StyledTextField = styled(TextField)`
  width: 371px;
`;
export default Header;
