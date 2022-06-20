import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Header } from "./Header.jsx";
import {Layout} from "../components/Layout.jsx"

export const AppRoot = () => {
  return(
    <BrowserRouter>
      <Header />
      <Layout />
    </BrowserRouter>
  )
};
