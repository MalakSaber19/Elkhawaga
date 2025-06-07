import React from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";


const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="">{children}</main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
