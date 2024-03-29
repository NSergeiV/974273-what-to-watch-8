import Logo from '../logo/logo';
import {Link} from 'react-router-dom';
import ListFilms from '../list-films/list-films';
import {MovieData, DataFilm} from '../../types/movie-data';
import {ClassLogo} from '../../const';
import Tabs from '../tabs/tabs';

const findSimilarMovies = (films: MovieData, genre: string) => {
  const movieDataArray = Object.values(films);
  const copyMovies = movieDataArray.slice();
  const relatedMovies = copyMovies.sort((a, b) => (a.genre === genre ? 1 : 0) < (b.genre === genre ? 1 : 0) ? 1 : -1).slice(0, 4);

  return relatedMovies;
};

function MoviePage(movieData: MovieData): JSX.Element {

  const movieDataArray = Object.values(movieData);
  const filmAdres = window.location.pathname;
  const urlArray = filmAdres.split('/').reverse();
  const filmSearch = movieDataArray.filter((objectData) => {
    if(Number(urlArray[0]) === objectData.id) {
      return objectData;
    }
  })[0];

  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Logo classLogo={ClassLogo.LOGO_HEIGH} />
            </div>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmSearch.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmSearch.genre}</span>
                <span className="film-card__year">{filmSearch.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/films/${Number(urlArray[0])}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={filmSearch.posterImage} alt={filmSearch.name} width="218" height="327" />
            </div>

            <Tabs {...filmSearch as DataFilm}/>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <ListFilms {...findSimilarMovies(movieData, filmSearch.genre)} />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Logo classLogo={ClassLogo.LOGO_FOOTER} />
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default MoviePage;
