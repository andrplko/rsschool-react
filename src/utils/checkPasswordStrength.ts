const checkPasswordStrength = (password: string) => {
  const passwordTracker = {
    uppercase: password.match(/^(?=.*[A-Z])/),
    lowercase: password.match(/^(?=.*[a-z])/),
    number: password.match(/^(?=.*[0-9])/),
    specialCharacter: password.match(/^(?=.*[!@#\$%\^&\*])/),
  };

  const passwordStrength = Object.values(passwordTracker).filter(
    (value) => value
  ).length;

  return passwordStrength;
};

export default checkPasswordStrength;
