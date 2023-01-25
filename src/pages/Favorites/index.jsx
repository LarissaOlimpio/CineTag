import Banner from 'components/Banner'
import Title from 'components/Title'
import styles from './Favorites.module.css'

function Favorite(){
    return(
        <>
            <Banner banner="favorites"/>
            <Title>
                <h1> Meus Favoritos</h1>
            </Title>
            <section className={styles.container}>

            </section>
        </>
    )
}

export default Favorite