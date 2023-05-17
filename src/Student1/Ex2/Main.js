import React from 'react'
import './Main.css'

import { Header } from './Header.js'
import { Tags} from './Tags'
import {Body} from "./Body";
import {Footer} from "./Footer";

export const Main = () => {
  return (
    <div className='Main'>
      <Header></Header>
      <Tags></Tags>
      <Body></Body>
      <Footer></Footer>
        
    </div>
  );
};

// export default Main;