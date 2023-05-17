import React from "react";
import "./Main.css";

import { Header } from "./Header";

import { Menu } from "./Menu";

import { Footer } from "./Footer";

export const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
};

export default Main;