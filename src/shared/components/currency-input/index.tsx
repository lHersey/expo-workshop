import { FC, useState } from 'react';

import { Affix, Container, TextInput } from './styles';

type Props = {
  value: number;
  onChangeValue(value: number): void;
};

const CurrentcyInput: FC<Props> = props => {
  const { value, ...rest } = props;
  const [mask, setMask] = useState('0');

  return (
    <Container>
      <Affix text="$" />
      <TextInput
        defaultValue="0"
        textAlign="center"
        keyboardType="numeric"
        onChangeText={setMask}
        spellCheck={false}
        numberOfLines={1}
        caretHidden
        selection={{ start: mask.length, end: mask.length }}
        unit="$"
        delimiter=","
        separator="."
        precision={2}
        minValue={0}
        value={value || 0}
        {...rest}
      />
    </Container>
  );
};

export default CurrentcyInput;
