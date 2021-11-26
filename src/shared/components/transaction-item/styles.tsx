import { LinearGradient } from 'expo-linear-gradient';
import Text from 'shared/components/text';
import styled from 'styled-components/native';

import Card from '../card';

export const Container = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconWithName = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconOverlay = styled(LinearGradient)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export const CategoryName = styled(Text)`
  font-family: Inter_700;
`;

export const ValuesContainer = styled.View`
  justify-content: space-around;
  align-items: flex-end;
`;

export const AmmountLabel = styled(Text)`
  font-family: Inter_400;
  color: ${p => p.theme.ACCENT_COLOR};
`;

export const DateLabel = styled(Text)`
  color: ${p => p.theme.TEXT_COLOR_GRAY};
`;
