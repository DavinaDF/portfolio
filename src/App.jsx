import Service from "./pages/Service";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToHashElement behavior="smooth" />
      <Header />
      <Home />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
