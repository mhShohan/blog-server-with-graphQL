import React, { useContext } from 'react';
import './login.css';
import authApi from '../../apis/authApi';
import { AuthContext } from '../../state/AuthContextProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const res = await authApi.login({ email, password }, '/login');

    if (res.error) {
      Swal.fire({
        icon: 'error',
        title: res.data.login,
      });
      return;
    }

    if (!res.error && res.data) {
      localStorage.setItem('token', res.data);

      dispatch({
        type: 'LOGIN',
        payload: { loading: false, isValidToken: true },
      });
    }
  };

  return (
    <div className="login_page">
      <form className="login_form" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control my-2"
        />

        <div className="flex">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
