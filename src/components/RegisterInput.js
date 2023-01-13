/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="flex flex-col space-y-4">
      <input type="text" value={name} onChange={onNameChange} placeholder="Name" className="input w-full" />
      <input type="email" value={email} onChange={onEmailChange} placeholder="Email" className="input w-full" />
      <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" className="input w-full" />
      <button className="btn btn-primary w-full" onClick={() => register({ name, email, password })}>Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
