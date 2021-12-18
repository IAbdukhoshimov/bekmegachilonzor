/*!

=========================================================
* Now UI Kit PRO React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-pro-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)
* By 2021 Khadjiakbar Rustamovic (https://rustamovic.uz)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React,{Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import 'i18n';
// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/react-demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import "./index.css"
// pages

// others
import Home from 'pages/home/Index';
import Contact from 'pages/contact/index';
import Gallery from 'pages/gallery/index';
import Products from 'pages/Products/Index'
import News from 'pages/News/index';
import About from 'pages/about/index'

ReactDOM.render(
  <BrowserRouter>
   <Suspense
          fallback={
            <>.</>
          }
        >
    <Switch>
      <Route path="/" exact render={() => <Home/>} />
      <Route path="/about" exact render={() => <About/>} />
      <Route path="/gallery" exact render={() => <Gallery/>} />
      <Route path="/products" exact render={() => <Products/>} />
      <Route path="/contact" exact render={() => <Contact/>} />
      <Route path="/news" exact render={() => <News/>} />
      <Redirect to="/" />
    </Switch>
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);
