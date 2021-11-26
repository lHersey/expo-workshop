import { FC } from 'react';
import { useModalState } from 'shared/hooks';

import CreateTransactionItem from '../create-transaction-item';
import DatePickerModal from '../date-picker-modal';

type Props = {
  value: string;
  onAccept: (date: string) => void;
};

const DatePickerItem: FC<Props> = props => {
  const { value, onAccept } = props;
  const [isVisible, handleToggle] = useModalState();

  const handleOnAccept = (date: string) => {
    handleToggle();
    onAccept(date);
  };

  return (
    <>
      <DatePickerModal isVisible={isVisible} onCloseRequest={handleToggle} value={value} onAccept={handleOnAccept} />
      <CreateTransactionItem label={new Date(value).toDateString()} onPress={handleToggle} icon="calendar" />
    </>
  );
};

export default DatePickerItem;
