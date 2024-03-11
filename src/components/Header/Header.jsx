
import { Link, useLocation } from 'react-router-dom';
import { GiBookCover } from "react-icons/gi";

import styles from './Header.module.css';


export default function Header() {
  const location = useLocation();
  return (
    <header>
      <div className={styles.headerTop}>
        <div className='container d-flex align-items-center gap-3'>
        <GiBookCover size={30}/>
          <h2>LIBRARY</h2>
        </div>
      </div>
      <div className={styles.headerMenu}>
        <div className='container'>
          <div className={styles.wrap}>
            <div className='d-flex gap-5'>
              <Link to="/book-library" className={location.pathname === '/book-library' ? styles.active : ''}>Books</Link>
              <Link to="/book-library/visitors" className={location.pathname === '/book-library/visitors' ? styles.active : ''}>Visitors</Link>
              <Link to="/book-library/cards" className={location.pathname === '/book-library/cards' ? styles.active : ''}>Cards</Link>
              <Link to="/book-library/statistics" className={location.pathname === '/book-library/statistics' ? styles.active : ''}>Statistics</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
