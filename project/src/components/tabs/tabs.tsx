// import {Fragment} from 'react';
import {useState, useEffect} from 'react';
import {DataFilm} from '../../types/movie-data';

const getComponentByType = (type: number, filmSearch: DataFilm) => {
  switch (type) {
    case 1:
      return (
        <div>
          <div className="film-rating">
            <div className="film-rating__score">{filmSearch.rating}</div>
            <p className="film-rating__meta">
              <span className="film-rating__level">{filmSearch.rating >= 8 ? 'Very good' : 'Norm'}</span>
              <span className="film-rating__count">{filmSearch.scoresCount} ratings</span>
            </p>
          </div>

          <div className="film-card__text">
            <p>{filmSearch.description}</p>

            <p className="film-card__director"><strong>Director: {filmSearch.director}</strong></p>

            <p className="film-card__starring"><strong>Starring: {filmSearch.starring.join(', ')}.</strong></p>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="film-card__text film-card__row">
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Director</strong>
              <span className="film-card__details-value">Wes Anderson</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Starring</strong>
              <span className="film-card__details-value">
              Bill Murray, <br />
              Edward Norton, <br />
              Jude Law, <br />
              Willem Dafoe, <br />
              Saoirse Ronan, <br />
              Tony Revoloru, <br />
              Tilda Swinton, <br />
              Tom Wilkinson, <br />
              Owen Wilkinson, <br />
              Adrien Brody, <br />
              Ralph Fiennes, <br />
              Jeff Goldblum
              </span>
            </p>
          </div>
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Run Time</strong>
              <span className="film-card__details-value">1h 39m</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Genre</strong>
              <span className="film-card__details-value">Comedy</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Released</strong>
              <span className="film-card__details-value">2014</span>
            </p>
          </div>
        </div>
      );
  }

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&#39;s funniest and most exquisitely designed films in years.</p>

            <footer className="review__details">
              <cite className="review__author">Kate Muir</cite>
              <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">8,9</div>
        </div>

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">Anderson&#39;s films are too precious for some, but for those of us willing to lose ourselves in them, they&#39;re a delight. &#34;The Grand Budapest Hotel&#34; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.</p>

            <footer className="review__details">
              <cite className="review__author">Bill Goodykoontz</cite>
              <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
            </footer>
          </blockquote>

          <div className="review__rating">8,0</div>
        </div>

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">I didn&#39;t find it amusing, and while I can appreciate the creativity, it&#39;s an hour and 40 minutes I wish I could take back.</p>

            <footer className="review__details">
              <cite className="review__author">Amanda Greever</cite>
              <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
            </footer>
          </blockquote>

          <div className="review__rating">8,0</div>
        </div>
      </div>
      <div className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>

            <footer className="review__details">
              <cite className="review__author">Matthew Lickona</cite>
              <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">7,2</div>
        </div>

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

            <footer className="review__details">
              <cite className="review__author">Paula Fleri-Soler</cite>
              <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">7,6</div>
        </div>

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

            <footer className="review__details">
              <cite className="review__author">Paula Fleri-Soler</cite>
              <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">7,0</div>
        </div>
      </div>
    </div>
  );
};

function Tabs(filmSearch: DataFilm): JSX.Element {
  const [isFilmInfo, setFilmInfo] = useState(1);

  useEffect(() => {
    const list = document.querySelectorAll('.film-nav__item');
    const onClickType = (evt: any) => {
      if (evt.target.className === 'small-film-card__link') {
        setFilmInfo(isFilmInfo * 0 + 1);
        list.forEach((item) => {if (item.classList.contains('film-nav__item--active')) {item.classList.remove('film-nav__item--active');}});
        list[0].classList.add('film-nav__item--active');
      }
      if (evt.target.className === 'film-nav__link') {
        list.forEach((item) => {if (item.classList.contains('film-nav__item--active')) {item.classList.remove('film-nav__item--active');}});
        evt.target.closest('li').classList.add('film-nav__item--active');
      }
    };
    document.addEventListener('click', onClickType);
    return () => document.removeEventListener('click', onClickType);
  }, [isFilmInfo]);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active">
            <a href="#" className="film-nav__link" onClick={(evt) => {evt.preventDefault(); setFilmInfo(isFilmInfo * 0 + 1);}}>Overview</a>
          </li>
          <li className="film-nav__item">
            <a href="#" className="film-nav__link" onClick={(evt) => {evt.preventDefault(); setFilmInfo(isFilmInfo * 0 + 2);}}>Details</a>
          </li>
          <li className="film-nav__item">
            <a href="#" className="film-nav__link" onClick={(evt) => {evt.preventDefault(); setFilmInfo(isFilmInfo * 0 + 3);}}>Reviews</a>
          </li>
        </ul>
      </nav>
      {getComponentByType(isFilmInfo, filmSearch)}
    </div>
  );
}

export default Tabs;
