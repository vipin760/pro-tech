import { Suspense, lazy, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Home = lazy(()=>import("./components/pages/Home/Home"))
const About = lazy(()=>import("./components/pages/About/About"))
const Service = lazy(()=>import("./components/pages/Service/Service"))
const Contact = lazy(()=>import("./components/pages/Contact/Contact"))
import Header from "./components/partials/Header/Header";
function App() {

  return (
    <>
       <BrowserRouter>
      <div id="smooth-wrapper">
        <div id="smooth-content" transition-style="in:wipe:down">
          <Header />
          <Suspense fallback={<div>Loading.......</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/service" element={<Service/>} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
