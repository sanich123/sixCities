type UserNameProps = {
  name: string,
  uniqUrl?: number,
}

function UserName({ name, uniqUrl }: UserNameProps): JSX.Element {
  return (
    <span className={ uniqUrl ? 'property__user-name' : 'reviews__user-name'}>
      { name }
    </span>
  );
}

export default UserName;
