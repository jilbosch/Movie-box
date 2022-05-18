import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import App from "../App";
import { PeliSola } from "../pages/PeliSola";

export default function Router () {

return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<App/>} />
            <Route path="/Movie" element = {<PeliSola/>} />
            
        </Routes>
    </BrowserRouter>
    )
}
