/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="flex flex-col space-y-4">
      <input type="email" value={email} onChange={onEmailChange} placeholder="Email " className="input w-full" />
      <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" className="input w-full" />
      <button className="btn btn-primary w-full" onClick={() => login({ email, password })}>Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
