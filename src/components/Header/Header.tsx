import React, { useState } from 'react';
import { Text } from '@consta/uikit/Text';
import { TextField } from '@consta/uikit/TextField';
import { IconSearch } from '@consta/uikit/IconSearch';
import styled from 'styled-components';

const Header = () => {
  const [value, setValue] = useState<string | null>(null);
  const handleChange = ({ value }: { value: string | null }) => setValue(value);

  return (
    <StyledHeader>
      <StyledText weight="bold" transform="uppercase" view="link">
        Тест
      </StyledText>
      <StyledTextField type="text" value={value} onChange={handleChange} placeholder="Поиск" leftSide={IconSearch} />
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
