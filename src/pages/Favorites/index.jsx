import Banner from 'components/Banner'
import Card from 'components/Card';
import { useFavoriteContext } from 'components/Context/Favorites'
import Title from 'components/Title'
import styles from './Favorites.module.css'

function Favorite(){
    const {favorite} = useFavoriteContext();
    return(
        <>
            <Banner banner="favorites"/>
            <Title>
                <h1> Meus Favoritos</h1>
            </Title>
            
            <section className={styles.container}>
                {favorite.map((fav) =>{
                    return <Card {...fav} key={fav.id}/>
                })}
            </section>
        </>
    )
}

export default Favorite