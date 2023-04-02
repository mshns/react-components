import { Link } from 'react-router-dom';

import './Footer.scss';

import { ReactComponent as RSSlogo } from './assets/svg/rs_school_js.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="https://github.com/mshns/" className="footer_author">
        mshns
      </Link>
      <h3 className="footer_copyright">React 2023</h3>
      <Link to="https://rs.school/react/">
        <RSSlogo className="footer_school" />
      </Link>
    </footer>
  );
};

export default Footer;
