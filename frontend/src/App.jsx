import { Suspense, lazy, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Home = lazy(()=>import("./components/pages/Home/Home"))
const About = lazy(()=>import("./components/pages/About/About"))
const Service = lazy(()=>import("./components/pages/Service/Service"))
const Contact = lazy(()=>import("./components/pages/Contact/Contact"))
import Header from "./components/partials/Header/Header";
import Footer from "./components/partials/Footer/Footer";
import logo from "../public/logo.png"
function App() {

  return (
    <>
       <BrowserRouter>
          <Header />
          <div className="absolute z-10 bg-transparent  bg-opacity-50 w-full top-0 left-0 right-0">
          <img src={logo} className="h-40 w-40 bg-transparent" alt="" srcset="" />
          </div>
          <Suspense fallback={<div>Loading.......</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/service" element={<Service/>} />
            </Routes>
          </Suspense>
          <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
