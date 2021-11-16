type ImageProps = {
  avatarUrl: string,
  uniqUrl?: number,
}
const ImgModificator = {
  Large: '74',
  Small: '54',
} as const;

function Image({ avatarUrl, uniqUrl }: ImageProps): JSX.Element {
  return (
    <img
      className={`${ uniqUrl ? 'property' : 'reviews'}__avatar user__avatar`}
      src={ avatarUrl }
      width={ uniqUrl ? ImgModificator.Large : ImgModificator.Small }
      height={ uniqUrl ? ImgModificator.Large : ImgModificator.Small }
      alt={`${ uniqUrl ? 'Host' : 'Reviews'}avatar`}
    />
  );
}

export default Image;
