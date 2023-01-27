import Banner from 'components/Banner'
import Title from 'components/Title'
import { useParams } from 'react-router-dom'
import styles from './Player.module.css'
import videos from 'json/db.json';

function Player(){
    const parameter = useParams();

    const video = videos.find((video => {
        return video.id === Number(parameter.id);
    }))

    return(
        <>
            <Banner banner="player"/>
            <Title>
                <h1>Player</h1>
            </Title>
            <section className={styles.container}>
                <iframe
                width="100%"
                height="100%"
                src={video.link}
                title={video.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>

            </>
    )
}

export default Player