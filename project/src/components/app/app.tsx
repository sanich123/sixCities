import MainScreen from '../main/main';

type Cards = number[];

type AppProps = {
  placesCount: number,
  cards: Cards
}

function App({placesCount, cards}: AppProps): JSX.Element {
  return <MainScreen placesCount={placesCount} cards={cards} />;
}

export default App;
