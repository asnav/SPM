const validation = (values) => {
  const errors = {};
  if (!values.fullname) {
    errors.fullname = 'Name is required';
  }
  if (values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must have at last 6 characters';
  }
  if (!values.password2) {
    errors.password2 = 'Confrim password is required';
  } else if (password !== password2) {
    errors.password2 = 'Passwords are not mutched';
  }
  return errors;
};

export default validation;
