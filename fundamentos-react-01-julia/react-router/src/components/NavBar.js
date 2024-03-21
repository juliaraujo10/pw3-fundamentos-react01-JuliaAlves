import { Outlet, Link } from "react-router-dom";
import styles from '../NavBar.module.css';

function NavBar() {
    return (
         <>
         <ul className={styles.list}>

            <li className={styles.item}> 
                <Link to="/">HOME</Link>
            </li>
            <li className={styles.item}> 
            <Link to="/empresa">EMPRESA</Link>
            </li>
            <li className={styles.item}> 
            <Link to="/contato">CONTATO</Link>
            </li>

         </ul>

         <Outlet />
        </>
    );
}

export default NavBar;