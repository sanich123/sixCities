type PriceProps = {
  price: number,
  uniqUrl?: number,
}

function Price({ price, uniqUrl}: PriceProps): JSX.Element {
  return (
    <div className={ `${uniqUrl ? 'property' : 'place-card'}__price` }>
      <b className={ `${uniqUrl ? 'property' : 'place-card'}__price-value` }>&euro;{ price }</b>
      <span className={ `${uniqUrl ? 'property' : 'place-card'}__price-text` }>&nbsp;night</span>
    </div>
  );
}

export default Price;
