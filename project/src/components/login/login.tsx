import Sprite from '../common/sprite';
import Logo from '../common/logo';
import { FormEvent, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../store/api-actions';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { statusOfAuth } from '../../store/reducer/user/user-selectors';
import RandomCity from './random-city';
import LoginInput from './login-input';
import PasswordInput from './password-input';

const WRONG_PASSWORD = 'Пароль должен состоять минимум из одной буквы и одной цифры';
const PASSWORD_PATTERN = /([A-zА-я]{1}[0-9]{1})|([0-9]{1}[A-zА-я]{1})/;

function LogIn(): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();
  const authStatus = useSelector(statusOfAuth);

  if (authStatus === AuthorizationStatus.AUTH) {
    history.push(AppRoutes.Main);
  }

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (PASSWORD_PATTERN.test(password)) {
      dispatch(loginAction({
        login: email,
        password: password,
      }));
    }

    else {
      return toast.warn(WRONG_PASSWORD);
    }
  };

  return (
    <>

      <Sprite />

      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">

                <Logo />

              </div>
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action="#"
                method="post"
                onSubmit={ handleSubmit }
              >
                <LoginInput setEmail={ setEmail } />

                <PasswordInput setPassword={ setPassword } />

                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <RandomCity />
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default memo(LogIn);
