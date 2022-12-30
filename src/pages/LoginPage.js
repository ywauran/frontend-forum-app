import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="p-5">
      <header>
        <h1 className="text-3xl font-bold text-primary">Forum App</h1>
      </header>
      <div className="flex items-center justify-center">
        <div className="w-96 flex flex-col space-y-4">
          <h2 className="text-center text-2xl font-bold text-primary">Login</h2>
          <LoginInput login={onLogin} />
          <p className="self-end">
            Belum punya akun?
            {' '}
            <Link className="text-primary" to="/register">Daftar</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
