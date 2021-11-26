import { LinearGradient } from 'expo-linear-gradient';
import Text from 'shared/components/text';
import styled, { css } from 'styled-components/native';

export const ShadowContainer = styled.View`
  overflow: visible;
`;

const backgroundStyles = css`
  display: flex;
  flex-grow: 1;
  border-radius: 15px;
  background: ${p => p.theme.MAIN_BACKGROUND_COLOR};
  padding: 15px;
  overflow: hidden;
`;

export const Container = styled.View`
  ${backgroundStyles}
`;

export const Gradient = styled(LinearGradient)`
  ${backgroundStyles}
`;

export const Title = styled(Text)`
  font-family: Inter_700;
`;
