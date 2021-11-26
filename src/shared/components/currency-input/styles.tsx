import { FakeCurrencyInput } from 'react-native-currency-input';
import Text from 'shared/components/text';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding: 8px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${p => p.theme.MAIN_BACKGROUND_COLOR};
  position: relative;
`;

export const TextInput = styled(FakeCurrencyInput)`
  font-size: 52px;
  font-family: Inter_200;
  color: ${p => p.theme.PRIMARY_COLOR};
`;

export const Affix = styled(Text)`
  font-size: 24px;
  font-family: Inter_700;
  color: ${p => p.theme.SECONDARY_COLOR};
`;
