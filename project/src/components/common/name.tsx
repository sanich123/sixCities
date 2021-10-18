type NameProps = {
  title: string,
}

function Name({ title }: NameProps): JSX.Element {
  return (
    <h1 className="property__name">
      { title }
    </h1>
  );
}

export default Name;
