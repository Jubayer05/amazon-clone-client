import React, { useState } from 'react';
import './Login.css';
import logo from '../../images/logos/logo.png';
import google from '../../images/logos/google.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { auth } from '../../firebase.config';
import { useStateValue } from '../../context/StateProvider';

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };
  const [{}, dispatch] = useStateValue();
  const [account, setAccount] = useState(false);
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((response) => {
        dispatch({
          type: 'SET_USER',
          user: {
            name: response.user.displayName,
            email: response.user.email,
          },
        });
        history.replace(from);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const createAccount = (e) => {
    e.preventDefault();
    if (userInfo.password === userInfo.confirmPassword) {
      auth
        .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        .then((response) => {
          if (response) {
            auth.currentUser
              .updateProfile({
                displayName: userInfo.fullName,
              })
              .then(function () {
                dispatch({
                  type: 'SET_USER',
                  user: {
                    name: response.user.displayName,
                    email: response.user.email,
                  },
                });
              })
              .catch(function (error) {
                alert(error.message);
              });
            history.replace(from);
          }
          console.log(response.user.email);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Password doesn't match. Please try again!");
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="" />
      </Link>

      {account ? (
        <div className="login__container">
          <h1>Create an account</h1>
          <form>
            <h5>Full Name</h5>
            <input
              type="text"
              value={userInfo.fullName}
              onChange={(e) =>
                setUserInfo({ ...userInfo, fullName: e.target.value })
              }
            />

            <h5>Email</h5>
            <input
              type="text"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />

            <h5>Password</h5>
            <input
              type="password"
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
            />

            <h5>Confirm Password</h5>
            <input
              type="password"
              value={userInfo.confirmPassword}
              onChange={(e) =>
                setUserInfo({ ...userInfo, confirmPassword: e.target.value })
              }
            />

            <button
              type="submit"
              onClick={createAccount}
              className="login__registerBtn"
            >
              Create Your Amazon Account
            </button>
          </form>
          <p>
            Already have an account?&nbsp;
            <span
              className="login__toggle"
              onClick={() => setAccount(!account)}
            >
              Login your account
            </span>
          </p>
        </div>
      ) : (
        <div className="login__container">
          <h1>Sign-In</h1>
          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />

            <h5>Password</h5>
            <input
              type="password"
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
            />

            <button type="submit" onClick={signIn} className="login__signInBtn">
              Sign In
            </button>
          </form>
          <p>
            Don't have an account?&nbsp;
            <span
              className="login__toggle"
              onClick={() => setAccount(!account)}
            >
              Create an account
            </span>
          </p>
        </div>
      )}

      <div className="login__google">
        <img src={google} alt="" />
        <p>Sign in with Google</p>
      </div>
    </div>
  );
};

export default Login;
