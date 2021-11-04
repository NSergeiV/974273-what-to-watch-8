export enum AppFilms {
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Main = '/',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const ClassLogo = {
  LOGO_HEIGH: 'logo__link',
  LOGO_FOOTER: 'logo__link logo__link--light',
};
