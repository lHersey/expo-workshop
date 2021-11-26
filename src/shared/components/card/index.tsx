import { FC } from 'react';
import { ViewProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container, Gradient, ShadowContainer } from './styles';

type Props = ViewProps & {
  gradient?: boolean;
};

//TODO: Remove as never when the styles types are fixed

const Card: FC<Props> = props => {
  const { gradient, children, ...viewProps } = props;
  const { GRADIENT_BACKGROUND } = useTheme();

  if (gradient)
    return (
      <ShadowContainer {...(viewProps as never)}>
        <Gradient {...(viewProps as never)} colors={GRADIENT_BACKGROUND} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          {children}
        </Gradient>
      </ShadowContainer>
    );

  return (
    <ShadowContainer {...(viewProps as never)}>
      <Container {...(viewProps as never)}>{children}</Container>
    </ShadowContainer>
  );
};

export default Card;
