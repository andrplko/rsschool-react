import { Component } from 'react';
import { PlaceholderProps, IErrorButtonState } from '../../types';
import styles from './ErrorButton.module.scss';

class ErrorButton extends Component<PlaceholderProps, IErrorButtonState> {
  state = {
    error: null,
  };

  throwTestError = () => {
    throw new Error('This is a test error');
  };

  handleClick = () => {
    try {
      this.throwTestError();
    } catch (error) {
      if (error instanceof Error) {
        this.setState({ error });
      }
    }
  };

  render() {
    if (this.state.error) {
      throw this.state.error;
    }

    return (
      <button
        type="button"
        onClick={this.handleClick}
        className={styles.button}
      >
        Error
      </button>
    );
  }
}

export default ErrorButton;
