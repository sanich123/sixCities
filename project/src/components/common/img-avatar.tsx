type ImageProps = {
  avatarUrl: string,
  uniqUrl?: number,
}

function Image({ avatarUrl, uniqUrl}: ImageProps): JSX.Element {
  return (
    <img
      className={`${uniqUrl ? 'property' : 'reviews'}__avatar user__avatar`} // почему не используешь библиотеку classnames?
      src={ avatarUrl }
      width={uniqUrl ? '74' : '54'}
      height={uniqUrl ? '74' : '54' }
      alt={`${uniqUrl ? 'Host' : 'Reviews'}avatar`}
    />
  );
}

export default Image;
