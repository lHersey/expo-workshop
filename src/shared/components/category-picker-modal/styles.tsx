import Text from 'shared/components/text';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  padding: 20px;
  border-radius: 20px;
  max-height: 80%;
  background: ${p => p.theme.MAIN_BACKGROUND_COLOR};
  flex-direction: column;
`;

export const Title = styled(Text)`
  font-family: Inter_700;
`;
