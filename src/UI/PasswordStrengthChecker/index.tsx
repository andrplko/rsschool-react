import classnames from 'classnames';
import checkPasswordStrength from '../../utils/checkPasswordStrength';
import styles from './PasswordStrengthChecker.module.scss';

const PasswordStrengthChecker = ({ password = '' }: { password: string }) => {
  const passwordStrength = checkPasswordStrength(password);

  const progressClassNames = classnames(styles.progress, {
    [styles.weak]: passwordStrength === 1,
    [styles.fair]: passwordStrength === 2,
    [styles.good]: passwordStrength === 3,
    [styles.strong]: passwordStrength === 4,
  });

  return (
    <div>
      <progress
        value={passwordStrength}
        max="4"
        className={progressClassNames}
      />
    </div>
  );
};

export default PasswordStrengthChecker;
