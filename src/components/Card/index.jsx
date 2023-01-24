import styles from './Card.module.css'
import favorite from './favorite.png'

function Card({id, title, imageMovie}){
    return(
        <div className="container">
            <img src={imageMovie} alt={title} />
            <h2>{title}</h2>
            <img src={favorite} alt="Favorite Movie" className={styles.favorite} />
        </div>
    )
}

export default Card