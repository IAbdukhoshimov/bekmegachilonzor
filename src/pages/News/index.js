import React from "react";
import Navbar from "components/Navbars/ScrollTransparentNavbar.js";
import Header from "pages/News/header";
import Footer from "container/footer";
import Helmet from "SEOHelmet/CustomHelmet";
function Index() {
  //   React.useEffect(() => {
  //     // document.body.classList.add("about-us");
  //     document.body.classList.add("sidebar-collapse");
  //     document.documentElement.classList.remove("nav-open");
  //     window.scrollTo(0, 0);
  //     document.body.scrollTop = 0;
  //     return function cleanup() {
  //       document.body.classList.remove("about-us");
  //       document.body.classList.remove("sidebar-collapse");
  //     };
  //   }, []);
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
      <Helmet title="Bek Mega Chilonzor || News" content="Latest Posts & News" />
      <Navbar />
      <div className="menu">
        <Header />

        {/* <div class="elfsight-app-5de2e1b1-313e-4842-ac1b-dae4ef880034"></div> */}
        <Footer />
      </div>
    </>
  );
}

export default Index;
