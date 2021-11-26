import Text from 'shared/components/text';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  margin-top: 40px;
`;

export const TransactionFlatList = styled.FlatList`
  padding: 0 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 30px;
`;

export const Diviver = styled.View`
  margin: 10px 0;
`;

export const Title = styled(Text)`
  font-family: Inter_700;
  font-size: 20px;
`;

export const ViewAll = styled(Text)`
  font-size: 15px;
  color: ${p => p.theme.TEXT_COLOR_GRAY};
`;
