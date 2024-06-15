import { Suspense, lazy, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./components/pages/Home/Home"));
const About = lazy(() => import("./components/pages/About/About"));
const Service = lazy(() => import("./components/pages/Service/Service"));
const Contact = lazy(() => import("./components/pages/Contact/Contact"));
import Header from "./components/partials/Header/Header";
import Footer from "./components/partials/Footer/Footer";
import logo from "../src/assets/logo.png";

import { AnimatePresence } from "framer-motion";
import Loading from "./components/partials/Loading/Loading";
function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Suspense fallback={<Loading/>}>
                
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/service" element={<Service />} />
                    </Routes>
                </Suspense>
                <Footer />
            </BrowserRouter>
        </>
    );

}

export default App;
