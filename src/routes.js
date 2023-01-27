import Favorite from "pages/Favorites"
import Start from "pages/Start"
import Footer from "components/Footer";
import Header from "components/Header";
import Container from "components/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FavoriteProvider from "components/Context/Favorites";
import Player from "pages/Player";

function AppRoutes(){
    return(
      
        <BrowserRouter>
            <Header/>
            <Container>
                <FavoriteProvider>
                    <Routes>

                            <Route path="/" element={<Start/>}></Route>

                            <Route path="/favoritos" element={<Favorite/>}></Route>

                            <Route path="/:id" element={<Player/>}></Route>

                    </Routes>
                </FavoriteProvider>
            </Container>
            <Footer/>
        </BrowserRouter>

    )
}

export default AppRoutes