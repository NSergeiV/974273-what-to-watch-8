import {Link} from 'react-router-dom';

function Logo(props: any): JSX.Element {

  const {classLogo} = props;

  return (
    <Link className={classLogo} to="/">
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  );
}

export default Logo;
