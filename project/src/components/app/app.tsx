import Main from '../main/main';

type AppScreenProps = {
  filmCard: {
    FILM_CARD_COUNT: number,
    FILM_CARD_TITLE: string,
    FILM_CARD_GENRE: string,
    FILM_CARD_YEAN: number,
  };
}

function App({filmCard}: AppScreenProps): JSX.Element {
  return <Main filmCard={filmCard} />;
}

export default App;
