import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import { useEffect, useState } from "react";
import styles from './Start.module.css'

function Start(){
    //Consumindo a Api
    const [videos, setVideos] =  useState([]);

    useEffect(() =>{
        //URl da Api obtida diretamente de "videos"
        //Essa URL foi feita a partir do repositório no gitHub em conjunto com o my json server
        fetch('https://my-json-server.typicode.com/LarissaOlimpio/cinetag-api/videos')
            //criando o Json
            .then(response => response.json())
            .then(data => {
                setVideos(data)
            })
    },[])
    return(
        <>
        

            <Banner banner="home"/>

            <Title>
                <h1>Um lugar para guardar seus filmes e vídeos</h1>
            </Title>
            
            <section className={styles.container}>
                
                {videos.map((video)=>{

                    return <Card {...video} key={video.id}/>
                })}
            
            </section>

            
        </>
    )
}

export default Start