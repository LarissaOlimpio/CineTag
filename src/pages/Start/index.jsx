import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import styles from './Start.module.css'
import videos from 'json/db.json'

function Start(){
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