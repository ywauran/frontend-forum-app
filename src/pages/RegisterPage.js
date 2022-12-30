import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ email, name, password }));

    navigate('/');
  };

  return (
    <section className="p5">
      <header>
        <h1 className="text-3xl font-bold text-primary">Forum App</h1>
      </header>
      <div className="flex items-center justify-center">
        <article className="w-96 flex flex-col space-y-4">
          <h2 className="text-center text-2xl font-bold text-primary">Create Your Account</h2>
          <RegisterInput register={onRegister} />
          <p className="self-end">
            Sudah punya akun?
            {' '}
            <Link className="text-primary" to="/">Masuk</Link>
          </p>
        </article>
      </div>
    </section>
  );
}

export default RegisterPage;
