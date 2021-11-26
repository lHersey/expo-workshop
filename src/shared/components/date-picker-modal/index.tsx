import DateTimePicker, { AndroidEvent, Event } from '@react-native-community/datetimepicker';
import { FC, useState } from 'react';
import { useCallback } from 'react';
import { Platform } from 'react-native';
import Modal from 'react-native-modal';

import Button from '../button';
import { Container } from './styles';

enum AndroidAction {
  DISMISS = 'dismissed',
  SET = 'set',
}

type Props = {
  isVisible: boolean;
  value: string;
  onAccept: (value: string) => void;
  onCloseRequest: () => void;
};

const DatePickerModal: FC<Props> = props => {
  const { isVisible, onAccept, onCloseRequest, value: initialValue } = props;
  const [date, setDate] = useState(new Date(initialValue));

  const handleOnAccept = useCallback(() => {
    onAccept(date.toISOString());
  }, [date, onAccept]);

  const onChange = (_: Event | AndroidEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const onChangeAndroid = (event: Event | AndroidEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;

    if (event.type === AndroidAction.DISMISS) onCloseRequest();
    if (event.type === AndroidAction.SET) onAccept(currentDate.toISOString());
  };

  if (Platform.OS === 'android' && isVisible)
    return (
      <DateTimePicker
        maximumDate={new Date()}
        value={date}
        mode="date"
        display="calendar"
        onChange={onChangeAndroid}
        onTouchCancel={onCloseRequest}
      />
    );

  return (
    <Modal isVisible={isVisible}>
      <Container>
        <DateTimePicker maximumDate={new Date()} value={date} mode="date" display="inline" onChange={onChange} />
        <Button text="Accept" primary onPress={handleOnAccept} />
      </Container>
    </Modal>
  );
};

export default DatePickerModal;
