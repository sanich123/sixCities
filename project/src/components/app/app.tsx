// import MainScreen from '../main/main';
import NoPage from '../no-page/no-page404';

type AppProps = {
  placesCount: number;
}
function App({placesCount}: AppProps): JSX.Element {

  return <NoPage />;
  // <MainScreen placesCount={placesCount}/>;
}

export default App;
