import MainScreen from '../main/main';


type AppProps = {
  placesCount: number;
}
function App({placesCount}: AppProps): JSX.Element {

  return <MainScreen placesCount={placesCount}/>;
}

export default App;
