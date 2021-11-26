import { ComponentProps, FC } from 'react';

import { TextDefault } from './styles';

type Props = ComponentProps<typeof TextDefault> & {
  text?: string;
};

const Text: FC<Props> = props => {
  const { text, children, ...rest } = props;

  return <TextDefault {...rest}>{text ?? children}</TextDefault>;
};

export default Text;
