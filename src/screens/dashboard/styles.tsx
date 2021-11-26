import Text from 'shared/components/text';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${p => p.theme.SECONDARY_BACKGROUND_COLOR};
`;

export const Title = styled(Text)`
  color: ${p => p.theme.PRIMARY_TEXT_COLOR_COLOR};
  font-family: Inter_600;
  font-size: 20px;
  margin-left: 20px;
`;

export const Block = styled.View`
  padding-top: 20px;
  padding-left: 30px;
  flex-direction: row;
  align-items: center;
`;
