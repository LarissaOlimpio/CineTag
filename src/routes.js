import Favorite from "pages/Favorites"
import Start from "pages/Start"
import Footer from "components/Footer";
import Header from "components/Header";
import Container from "components/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function AppRoutes(){
    return(
      
        <BrowserRouter>
            <Header/>
            <Container>
                <Routes>

                        <Route path="/" element={<Start/>}></Route>

                        <Route path="/favoritos" element={<Favorite/>}></Route>

                </Routes>
            </Container>
            <Footer/>
        </BrowserRouter>

    )
}

export default AppRoutes