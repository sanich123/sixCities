import { memo } from 'react';

type LoginInputProps = {
  setEmail: (evt: string) => void
}

function LoginInput({ setEmail }: LoginInputProps): JSX.Element {

  return (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden">E-mail</label>
      <input
        onChange={ ({ target }) => setEmail(target.value)}
        className="login__input form__input"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
    </div>);
}

export default memo(LoginInput);
