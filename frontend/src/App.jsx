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
       <Header />
      <div id="smooth-wrapper" className="h-[50rem] w-full dark:bg-black bg-[#423838]  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div id="smooth-content" transition-style="in:wipe:down" className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
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

<div className="h-[50rem] w-full dark:bg-black bg-green-400  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
{/* Radial gradient for the container to give a faded look */}
<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
{/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
  Backgrounds
</p> */}
</div>