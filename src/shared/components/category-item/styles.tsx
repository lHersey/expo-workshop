import Text from 'shared/components/text';
import { colorAdjust } from 'shared/hooks';
import styled from 'styled-components/native';

export const Container = styled.Pressable`
  background: ${p => p.theme.SECONDARY_BACKGROUND_COLOR};
  border-radius: 20px;
  padding: 10px;
  align-items: center;
  flex-grow: 1;
  flex-direction: row;
  margin-top: 10px;
`;

export const IconContainer = styled.View<{ color: string }>`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 25px;
  background: ${p => colorAdjust(p.color, 30)};
  justify-content: center;
  align-items: center;
`;

export const Label = styled(Text)`
  font-family: Inter_300;
`;
