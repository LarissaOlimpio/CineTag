import Favorite from "pages/Favorites"
import Start from "pages/Start"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import BasePage from "pages/BasePage";

function AppRoutes(){
    return(
      
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<BasePage/>}>
                    <Route index element={<Start/>}></Route>

                    <Route path="favoritos" element={<Favorite/>}></Route>

                    <Route path=":id" element={<Player/>}></Route>

                    <Route path="*" element={<NotFound/>}></Route>
                </Route>
            </Routes>
             
        </BrowserRouter>

    )
}

export default AppRoutes