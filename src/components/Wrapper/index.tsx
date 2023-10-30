import { Component } from 'react';
import { ChildrenProps } from '../../types';
import styles from './Wrapper.module.scss';

class Wrapper extends Component<ChildrenProps> {
  render() {
    const { children } = this.props;
    return <div className={styles.wrapper}>{children}</div>;
  }
}

export default Wrapper;
