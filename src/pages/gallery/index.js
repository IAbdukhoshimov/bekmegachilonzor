import React from 'react';
import Navbar from "components/Navbars/ScrollTransparentNavbar.js";
import Header from 'pages/gallery/header';
import Gallery from 'pages/gallery/main';
import Footer from 'container/footer';
import Helmet from 'SEOHelmet/CustomHelmet'
function Index() {
  React.useEffect(() => {
    document.body.classList.add("about-us");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  React.useEffect(() => {
    // document.body.classList.add("index-page");
    // document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
    return (
        <>
           <Helmet title='Bek Mega Chilonzor || Gallery' content='Gallery Page'/>
           <Navbar/>
           <div className="wrapper">
           <div className='menu'>
           <Header/>
           <Gallery/>
           <Footer/>
           </div>
           </div>
        </>
    )
}

export default Index
