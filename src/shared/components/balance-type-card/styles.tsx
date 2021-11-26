import Text from 'shared/components/text';
import styled from 'styled-components/native';

export const Pressable = styled.Pressable`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  flex: 1;
  margin: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.15);
  padding: 10px;
`;

export const BalanceLabelsContainer = styled.View`
  margin-left: 10px;
`;

export const BalanceTitle = styled(Text)`
  color: ${p => p.theme.SECONDARY_TEXT_COLOR};
  font-size: 14px;
  font-family: Inter_700;
`;

export const BalanceAmmount = styled(Text)`
  color: ${p => p.theme.SECONDARY_TEXT_COLOR};
  font-size: 14px;
`;
