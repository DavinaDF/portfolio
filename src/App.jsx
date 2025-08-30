import { Analytics } from "@vercel/analytics/react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToHashElement behavior="smooth" />
      <Header />
      <Home />
      <Footer />
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
