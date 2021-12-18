import React from 'react'
import Navbar from "components/Navbars/ScrollTransparentNavbar.js";
import Footer from 'container/footer';
import Header from 'pages/Products/Header'
import Cards from 'pages/Products/Cards'
import Helmet from 'SEOHelmet/CustomHelmet'

function Index() {
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
        <Helmet title='Bek Mega Chilonzor || Products' content='Products Page'/>
           <Navbar/>
           <div className="menu">
           <Header/>
           <Cards/>
           <Footer/>
           </div>
        </>
    )
}

export default Index
