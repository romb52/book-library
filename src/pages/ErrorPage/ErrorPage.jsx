import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from './ErrorPage.module.css';
import { FaHome } from 'react-icons/fa';
import { withLayout } from '../../components/Main/Main';


function Errorpage() {
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location.pathname);
    useEffect(() => { if (location.pathname !== '/book-library/404') {
        navigate ('/book-library/404')
        //console.log(location.pathname);
     } }, [navigate, location]);
    return <section className={styles.bg}>
        <div className="container">
            <h1> Ooops! 404 error</h1>
            <Link className={styles.linkHome} to='/book-library'><FaHome className={styles.homeIcon} />Home</Link>
        </div>
    </section>
}

export default withLayout(Errorpage);