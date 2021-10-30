type PremiumProps = {
  uniqUrl?: number,
}

function Premium({ uniqUrl }: PremiumProps):JSX.Element {
  return (
    <div className={ `${ uniqUrl ? 'property' : 'place-card'}__mark`}>
      <span>Premium</span>
    </div>
  );
}

export default Premium;
