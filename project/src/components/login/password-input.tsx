import { memo } from 'react';

type PasswordInputProps = {
  setPassword: (evt: string) => void
}
function PasswordInput({ setPassword }:  PasswordInputProps): JSX.Element {

  return (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden">Password</label>
      <input
        className="login__input form__input"
        type="password"
        name="password"
        placeholder="Password"
        required
        onChange={ ({ target }) => setPassword(target.value) }
      />
    </div>);
}

export default memo(PasswordInput);
