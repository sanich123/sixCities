import MainScreen from '../main/main';

type AppProps = {
  placesCount: number,
  cardsList: number[]
}

function App({placesCount, cardsList}: AppProps): JSX.Element {
  return <MainScreen placesCount={placesCount} cardsList={cardsList} />;
}

export default App;
