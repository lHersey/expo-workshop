import { SafeAreaView } from 'react-native-safe-area-context';
import Card from 'shared/components/card';
import Text from 'shared/components/text';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  display: flex;
  flex: 1;
  padding: 0 30px;
  padding-top: 0;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  font-family: Inter_600;
  color: ${p => p.theme.TEXT_COLOR_GRAY};
  font-size: 24px;
  margin-bottom: 40px;
`;

export const ButtonCreate = styled(Card)`
  margin-top: 20px;
  width: 100%;
  align-items: center;
`;

export const Pressable = styled.Pressable`
  width: 100%;
`;

export const ButtonText = styled(Text)`
  color: ${p => p.theme.WHITE};
`;
