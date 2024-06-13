import { Suspense, lazy, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content" transition-style="in:wipe:down">
          <Header />
         <BrowserRouter>
         <Suspense fallback={<Loader/>}>
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
            </Suspense>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
