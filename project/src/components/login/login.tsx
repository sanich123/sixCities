import Sprite from '../common/sprite';
import Logo from '../common/logo';
import { FormEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../store/api-actions';
import { AppRoutes } from '../../const';
import { useHistory } from 'react-router';

function LogIn(): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);


  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
      history.push(AppRoutes.Main);
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
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    ref={ loginRef }
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    ref={ passwordRef }
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              {/* <div className="locations__item">
                <a className="locations__item-link" href="/">
                  <span>Amsterdam</span>
                </a>
              </div> */}
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default LogIn;
