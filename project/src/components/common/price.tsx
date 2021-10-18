type PriceProps = {
  price: number,
  uniqUrl?: number,
}

function Price({ price, uniqUrl}: PriceProps): JSX.Element {
  return (
    <div className={ uniqUrl ? 'property__price' : 'place-card__price'} >
      <b className={ uniqUrl ? 'property__price-value' : 'place-card__price-value'} >&euro;{ price }</b>
      <span className={ uniqUrl ? 'property__price-text' : 'place-card__price-text'} >&nbsp;night</span>
    </div>
  );
}

export default Price;
