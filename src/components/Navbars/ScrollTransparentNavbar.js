/** @format */

import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
  NavLink,
} from "reactstrap";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import WLogo from "assets/BG/Logo/LlogoWhite.png";
import WText from "assets/BG/Logo/BSLongWhite.png";

import Logo from "assets/BG/Logo/Llogo.png";
import Text from "assets/BG/Logo/BSLong.png";

function ScrollTransparentNavbar() {
  const [activePillLang, setActivePillLang] = React.useState("2");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? ""
      : " navbar-transparent"
  );
  // eslint-disable-next-line
  const [buyButtonColor, setBuyButtonColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? "#D2A264"
      : "neutral"
  );
  const [simple, setSimple] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? `${Logo}`
      : `${WLogo}`
  );
  // eslint-disable-next-line 
  const [simpleText, setSimpleText] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? `${Text}`
      : `${WText}`
  );
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
        setBuyButtonColor("#D2A264");
        setSimple(`${Logo}`);
        setSimpleText(`${Text}`);
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor(" navbar-transparent");
        setBuyButtonColor("neutral");
        setSimple(`${WLogo}`);
        setSimpleText(`${WText}`);
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const { t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }
  function eng() {
    setActivePillLang("1");
    setCollapseOpen(false);
    handleClick("en");
  }
  function rus() {
    setActivePillLang("2");
    setCollapseOpen(false);
    handleClick("ru");
  }
  function it() {
    setActivePillLang("3");
    setCollapseOpen(false);
    handleClick("it");
  }
  function tr() {
    setActivePillLang("4");
    setCollapseOpen(false);
    handleClick("tr");
  }
  function uzb() {
    setActivePillLang("5");
    setCollapseOpen(false);
    handleClick("uz");
  }
  function getCode(inp) {
    var inpMap = {
      1: (
        <>
          <img
            alt="English"
            src="https://img.icons8.com/cute-clipart/20/ffffff/usa.png"
          />{" "}
          ENGLISH
        </>
      ),
      2: (
        <>
          <img
            alt="Russian"
            src="https://img.icons8.com/cute-clipart/20/ffffff/russian-federation.png"
          />{" "}
          РУССКИЙ
        </>
      ),
      3: (
        <>
          <img
            alt="Italian"
            src="https://img.icons8.com/color/20/ffffff/italy.png"
          />{" "}
          ITALIANO
        </>
      ),
      4: (
        <>
          <img
            alt="Turkish"
            src="https://img.icons8.com/color/20/ffffff/turkey.png"
          />{" "}
          TÜRKÇE
        </>
      ),
      5: (
        <>
          <img
            alt="Uzbek"
            src="https://img.icons8.com/fluency/20/ffffff/flag-of-uzbekistan.png"
          />{" "}
          O`ZBEK
        </>
      ),
    };

    var defaultCode = (
      <>
        <img
          alt="English"
          src="https://img.icons8.com/cute-clipart/20/ffffff/usa.png"
        />{" "}
        ENGLISH
      </>
    );

    return inpMap[inp] || defaultCode;
  }
  function Close() {
    setCollapseOpen(false);
    window.scrollTo(0, 0);
  }
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top" + navbarColor} color="white" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              <img src={simple} alt="..." height="40" />
            </NavbarBrand>
            <UncontrolledTooltip target="navbar-brand">
              Bek Mega Chilonzor Limited Liability Company
            </UncontrolledTooltip>
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              {/* <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink1"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app"></i>
                  <p>Components</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink1" right>
                  <DropdownItem to="/" tag={Link}>
                    <i className="now-ui-icons design_image"></i>
                    Presentation
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36"></i>
                    All components
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <NavItem>
                <NavLink tag={Link} to="/" onClick={Close}>
                  {t("Header.1")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about" onClick={Close}>
                  {t("Header.2")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/gallery" onClick={Close}>
                  {t("Header.3")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/products" onClick={Close}>
                  {t("Header.5")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/news" onClick={Close}>
                  {t("Header.6")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact" onClick={Close}>
                  {t("Header.7")}
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  className="nav-link btn-default"
                  // color={buyButtonColor}
                  style={{ backgroundColor: `#D2A264` }}
                  data-toggle="dropdown"
                  href="#"
                  id="navbarDropdownMenuLink1"
                  // nav
                  onClick={(e) => e.preventDefault()}
                >
                  {getCode(activePillLang)}
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink1" right>
                  <DropdownItem tag={Link} onClick={() => eng()}>
                    <img
                      alt="English"
                      src="https://img.icons8.com/cute-clipart/20/ffffff/usa.png"
                    />{" "}
                    ENGLISH
                  </DropdownItem>
                  <DropdownItem tag={Link} onClick={() => rus()}>
                    <img
                      alt="Russian"
                      src="https://img.icons8.com/cute-clipart/20/ffffff/russian-federation.png"
                    />{" "}
                    РУССКИЙ
                  </DropdownItem>
                  <DropdownItem tag={Link} onClick={() => it()}>
                    <img
                      alt="Italian"
                      src="https://img.icons8.com/color/20/ffffff/italy.png"
                    />{" "}
                    ITALIANO
                  </DropdownItem>
                  <DropdownItem tag={Link} onClick={() => tr()}>
                    <img
                      alt="Turkish"
                      src="https://img.icons8.com/color/20/ffffff/turkey.png"
                    />{" "}
                    TÜRKÇE
                  </DropdownItem>
                  <DropdownItem tag={Link} onClick={() => uzb()}>
                    <img
                      alt="Uzbek"
                      src="https://img.icons8.com/fluency/20/ffffff/flag-of-uzbekistan.png"
                    />{" "}
                    O`ZBEK
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ScrollTransparentNavbar;
