import Logo from '../logo/logo';
import {Link} from 'react-router-dom';
import {MovieData} from '../../types/movie-data';
import AddReviewForm from '../add-review-form/add-review-form';

function AddReview(movieData: MovieData): JSX.Element {
  const movieDataArray = Object.values(movieData);
  const filmAdres = window.location.pathname;
  const urlArray = filmAdres.split('/').reverse();
  const filmSearch = movieDataArray.filter((objectData) => {
    if(Number(urlArray[1]) === objectData.id) {
      return objectData;
    }
  })[0];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Logo />
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${Number(urlArray[1])}`} className="breadcrumbs__link">{filmSearch.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img src={filmSearch.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>
      <div className="add-review">
        <AddReviewForm />
      </div>

    </section>
  );
}

export default AddReview;
