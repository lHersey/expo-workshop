import { showMessage } from 'react-native-flash-message';

class ToastService {
  static showError(message: string) {
    showMessage({ type: 'danger', message });
  }

  static showSuccess(message: string) {
    showMessage({ type: 'success', message });
  }

  static showWarning(message: string) {
    showMessage({ type: 'warning', message });
  }

  static showInfo(message: string) {
    showMessage({ type: 'info', message });
  }
}

export default ToastService;
