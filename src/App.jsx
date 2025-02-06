import "./App.css";
import HomeX from "./Comp/pages/HomeX.jsx"
import AboutX from "./Comp/pages/AboutX.jsx"
import ContactX from "./Comp/pages/ContactX.jsx"
import CoursesX from "./Comp/pages/CoursesX.jsx"
import ErrorX from "./Comp/pages/ErrorX.jsx"
import QandA from "./Comp/pages/QandA.jsx"
import HeaderX from "./Comp/main/HeaderX.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterX from "./Comp/pages/FooterX.jsx";
function App() {
  return (
    <>
      <BrowserRouter >
      <HeaderX/>
        <Routes  >
          <Route path="/" element={<HomeX/>} />
          <Route path="/about" element={<AboutX/>} />
          <Route path="/courses" element={<CoursesX/>} />
          <Route path="/contact" element={<ContactX/>} />
          <Route path="*" element={<ErrorX/>} />
         
        </Routes>
        <FooterX/>
        <QandA/>
      </BrowserRouter>
    </>
  );
}

export default App;

// js projects to
// make
