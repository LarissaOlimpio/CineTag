import Banner from 'components/Banner'
import Title from 'components/Title'
import { useParams } from 'react-router-dom'
import styles from './Player.module.css'
import NotFound from 'pages/NotFound';
import { useEffect, useState } from 'react';

function Player(){
    

    const [video, setVideos] = useState();
    const parameter = useParams();

    useEffect(() =>{
        fetch(`https://my-json-server.typicode.com/LarissaOlimpio/cinetag-api/videos?id=${parameter.id}`)
            .then(response => response.json())
            .then(data =>{
                setVideos(...data)
            })
    },[parameter.id])

    if(!video){
        return <NotFound/>
    }

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