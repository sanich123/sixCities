type UserNameProps = {
  name: string,
  uniqUrl?: number,
}

function UserName({ name, uniqUrl }: UserNameProps): JSX.Element {
  return (
    <span className={ `${ uniqUrl ? 'property' : 'reviews'}__user-name` }>
      { name }
    </span>
  );
}

export default UserName;
