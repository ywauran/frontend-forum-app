/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="flex flex-col space-y-4">
      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
        className="w-full input input-bordered"
      />
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        className="w-full input input-bordered"
      />
      <button
        type="button"
        className="w-full btn btn-primary"
        onClick={() => login({ email, password })}
      >
        Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
