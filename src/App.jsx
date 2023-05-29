import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home"

const App = () => {

    // ROUTES
    return (
        <BrowserRouter>
            {/* VLIBRAS */}
            <div vw="true" className="enabled">
                <div vw-access-button="true" className="active"></div>
                    <div vw-plugin-wrapper="true">
                    <div className="vw-plugin-top-wrapper"></div>
                </div>
            </div>

            {/* ROUTES */}
            <Routes>
                <Route exact path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App