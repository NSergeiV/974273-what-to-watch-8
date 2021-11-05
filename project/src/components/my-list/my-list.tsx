import Logo from '../logo/logo';
import ListFilms from '../list-films/list-films';
import {MovieData} from '../../types/movie-data';
import {ClassLogo} from '../../const';

function MyList(movieData: MovieData): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo classLogo={ClassLogo.LOGO_HEIGH} />
        </div>

        <h1 className="page-title user-page__title">My list</h1>

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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <ListFilms {...movieData as MovieData}/>
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
  );
}

export default MyList;
