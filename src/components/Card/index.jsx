import { useFavoriteContext } from 'components/Context/Favorites'
import { Link } from 'react-router-dom';
import styles from './Card.module.css'
import iconFavorite from './iconFavorite.png'
import iconNotfavor from './iconNotfavor.png'

function Card({id, title, imageMovie}){
    //importando o return do useFavoriteContext
    const {favorite, addFavorite} = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icon = !isFavorite ?  iconFavorite : iconNotfavor;

    return(
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={imageMovie} alt={title}  className={styles.imageMovie}/>
                <h2>{title}</h2>
            </Link>
            <img src={icon}
                 alt="Favorite Movie"
                 className={styles.favorite} 
                onClick={() => {
                    addFavorite({id,title,imageMovie})}
                } />
        </div>
    )
}

export default Card