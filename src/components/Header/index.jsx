import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import logo from './logo.png';
import Headerlink from 'components/HeaderLink';

function Header(){
    return(
        <header>
            <div className={styles.header}>
                <Link to="./">
                    <img src={logo} alt="logo CineTag" />
                </Link>

                <nav>
                    <Headerlink url="./">
                         Home
                    </Headerlink>

                    <Headerlink url="./Favoritos">
                        Favoritos
                    </Headerlink>

                </nav>
            </div>
        </header>
    )
}

export default Header