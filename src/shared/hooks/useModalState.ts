import { useCallback, useState } from 'react';

const useModalState = (): [boolean, () => void] => {
  const [isVisible, setVisible] = useState(false);
  const handleShowModal = useCallback(() => setVisible(v => !v), []);

  return [isVisible, handleShowModal];
};

export { useModalState };
