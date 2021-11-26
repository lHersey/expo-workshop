import Text from 'shared/components/text';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 30px;
  padding-top: 30px;
`;

export const TextContainer = styled.View`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const Title = styled(Text)`
  color: ${p => p.theme.SECONDARY_TEXT_COLOR};
`;

export const AmmountLabel = styled(Text)`
  color: ${p => p.theme.SECONDARY_TEXT_COLOR};
  font-family: Inter_600;
  font-size: 36px;
`;

export const BalanceTypeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;
