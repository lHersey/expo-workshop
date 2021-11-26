import { Ionicons } from '@expo/vector-icons';
import Text from 'shared/components/text';
import styled, { css } from 'styled-components/native';

export type Modifiers = {
  primary?: boolean;
  secondary?: boolean;
  dense?: boolean;
};

export const Pressable = styled.Pressable<Modifiers>`
  display: flex;
  min-width: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 15px;
  border-radius: 15px;

  ${p =>
    p.dense &&
    css`
      padding: 10px 7.5px;
    `}

  ${p =>
    p.primary &&
    css`
      background: ${p.theme.PRIMARY_COLOR};
    `}

  ${p =>
    p.secondary &&
    css`
      background: ${p.theme.SECONDARY_COLOR};
    `}
`;

export const LabelsContainer = styled.View`
  flex-direction: column;
`;

export const Label = styled(Text)`
  color: ${p => p.theme.WHITE};
`;

export const Subtitle = styled(Text)`
  color: ${p => p.theme.WHITE};
  font-size: 12px;
`;

export const Icon = styled(Ionicons)`
  margin-left: 10px;
`;
