import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
     
    </>
  );
};

export default App;
