import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import {AppFilms, AuthorizationStatus} from '../../const';
import ErrorScreen from '../error-screen/error-screen';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../films/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';
import {MovieData} from '../../types/movie-data';

type AppScreenProps = {
  filmCard: {
    FILM_CARD_TITLE: string,
    FILM_CARD_GENRE: string,
    FILM_CARD_YEAN: number,
  };
  movieData: MovieData;
}

function App(props: AppScreenProps): JSX.Element {
  /* eslint-disable no-console */
  console.log(props);
  const {filmCard, movieData} = props;

  console.log(filmCard, movieData);

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppFilms.Main} exact>
          <Main {...filmCard} />
        </Route>
        <Route path={AppFilms.SignIn} exact>
          <SignIn />
        </Route>
        <Route path={AppFilms.Film} exact component={() => <Film {...movieData as MovieData} />}>
        </Route>
        <Route path={AppFilms.AddReview} exact>
          <AddReview {...movieData as MovieData} />
        </Route>
        <Route path={AppFilms.Player} exact>
          <Player {...movieData as MovieData} />
        </Route>
        <PrivateRoute path={AppFilms.MyList} exact render={() => <MyList {...movieData as MovieData}/>} authorizationStatus={AuthorizationStatus.Auth}>
          <MyList {...movieData as MovieData} />
        </PrivateRoute>
        <Route>
          <ErrorScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
