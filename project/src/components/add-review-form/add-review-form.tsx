import {useState, FormEvent, ChangeEvent} from 'react';

function AddReviewForm(): JSX.Element {
  const [ratingStars, setRatingStars] = useState({star: 0, text: ''});
  return (
    <form action="#" className="add-review__form"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          {Array(10).fill(null).map((ownStar, index) => {
            const valueKey = 10 - index;
            return (
              <>
                <input className="rating__input" id={`star-${valueKey}`} type="radio" name="rating" value={`${valueKey}`}
                  onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                    const value = Number(target.value);
                    setRatingStars({
                      ...ratingStars,
                      star: value,
                    });
                  }}
                />
                <label className="rating__label" htmlFor={`star-${valueKey}`}>Rating {valueKey}</label>
              </>
            );
          })}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          onChange={(evt) => {
            const value = evt.target.value;
            setRatingStars({
              ...ratingStars,
              text: value,
            });
          }}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default AddReviewForm;
