import styles from './Banner.module.css'

function Banner({banner, length}){
    return(
        <div
         className={styles.banner} style={{backgroundImage: `url(/assets/banner-${banner}.png)`}}>
            
        </div>
    )
}

export default Banner