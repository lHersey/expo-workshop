import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  margin-top: 20px;
  background: ${p => p.theme.MAIN_BACKGROUND_COLOR};
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
`;

export const TextInput = styled.TextInput`
  display: flex;
  flex-grow: 1;
  margin-left: 10px;
  font-family: Inter_700;
  color: ${p => p.theme.TEXT_COLOR_GRAY};
`;
