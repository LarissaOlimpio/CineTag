import Container from "components/Container"
import FavoriteProvider from "components/Context/Favorites"
import Footer from "components/Footer"
import Header from "components/Header"
import { Outlet } from "react-router-dom"

function BasePage(){
    //Outlet é um componente do react-router-dom que  possibilita
    // criar uma rota pai enquanto o Outlet corresponde a todas as rotas filhas
    // que serão encaixadas nessa rota.
    return(
            <main>
                <Header/>

                <FavoriteProvider>

                    <Container>
                        
                        <Outlet/>

                    </Container>

                </FavoriteProvider>
                
                <Footer/>

            </main>
    )

}

export default BasePage