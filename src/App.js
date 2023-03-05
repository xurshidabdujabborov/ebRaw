import React from "react";
import Best from "./Components/Best/Best";
import Blog from "./Components/Blog/Blog";
import Bottom from "./Components/Bottom/Bottom";
import Carusel from "./Components/Carusel/Carusel";
import Center from "./Components/Center/Center";
import Follow from "./Components/Follow/Follow";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import Shoping from "./Components/Shoping/Shoping";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Product />
      <Best />
      <Carusel />
      <Center />
      <Shoping />
      <Blog />
      <Bottom />
      <Follow />
      <Footer />
    </div>
  );
}

export default App;
