import Menu from "components/MainComponent/Menu";
import SearchMenu from "components/MainComponent/SearchMenu";
import { animateComponentExit, animateHeader } from "components/Ui/animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import ElementContainer from "reusableComponents/ElementContainer";

import style from "./Style";

function HeaderContainer() {
  const countries = ["EN", "AR", "ES", "FR", "TR"];
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchMenuIsOpen, setSearchMenuIsOpen] = useState(false);
  const [routerPath, setRouterPath] = useState(false);
  const [overViewBtnShow, setOverviewBtnShow] = useState(false);
  const [isAboutPage, setIsAboutPage] = useState(false);

  const route = useRouter();

  //================ search line animation handler =====================
  const HandleMouseEnter = () => {
    let line = document.querySelector(".search-button__dash");
    if (line) {
      let line2 = (line.attributes.x2.nodeValue = "18");
      let line3 = (line.attributes.y2.nodeValue = "18");
    }
  };
  const handleMouseLeave = () => {
    let line = document.querySelector(".search-button__dash");
    if (line) {
      let line2 = (line.attributes.x2.nodeValue = "15");
      let line3 = (line.attributes.y2.nodeValue = "15");
    }
  };
  useEffect(() => {
    if (menuOpen || searchMenuIsOpen) {
      document.body.style.overflow = "hidden";
      // document.body.style.paddingRight = "17px";
    } else {
      document.body.style.overflow = "auto";
      // document.body.style.paddingRight = "0";
    }
  }, [menuOpen, searchMenuIsOpen]);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    setSearchMenuIsOpen(false);
    setOverviewBtnShow(false);
    setIsAboutPage(false);
  };
  const handleSearchMenu = () => {
    setSearchMenuIsOpen(!searchMenuIsOpen);
    setMenuOpen(false);
    setOverviewBtnShow(false);
    setIsAboutPage(false);
  };

  useEffect(() => {
    // setSearchMenuIsOpen(false);
    // setMenuOpen(false);
    if (route.pathname === "/") {
      setTimeout(() => {
        setRouterPath(false);
      }, 1000);
    }
  }, [route]);

  let linkPath = route.asPath.split("/");
  useEffect(() => {
    if (/[/]([a-zA-Z])/.test(route.pathname)) {
      setTimeout(() => {
        setRouterPath(true);
      }, 0);
    }
    if (route.asPath === "/about" && !searchMenuIsOpen && !menuOpen) {
      setIsAboutPage(true);
    }
    if (!searchMenuIsOpen && !menuOpen) {
      if (/[/]([a-zA-Z])+[/]([a-zA-Z])/.test(route.asPath)) {
        setTimeout(() => {
          setOverviewBtnShow(true);
        }, 650);
      }
    }
  }, [searchMenuIsOpen, route, menuOpen]);

  return (
    <motion.div>
      <style.Div_header_wrapper routerPath={routerPath} isAboutPage={isAboutPage} variants={animateHeader} initial="hidden" animate="show" exit="exit">
        <style.Div_header_container>
          <style.Div_left_part>
            <Link href="/">
              <a title="home">
                <style.Div_title_wrapper isAboutPage={isAboutPage} menuIsOpen={menuOpen} routerPath={routerPath} searchMenuIsOpen={searchMenuIsOpen}>
                  <h2>Haze</h2>
                </style.Div_title_wrapper>
              </a>
            </Link>
            {overViewBtnShow && (
              <span className="overview-wrapper">
                <Link href={`/${linkPath[1]}`}>
                  <a className="overview">
                    <div className="arrow">
                      <i class="far fa-long-arrow-left"></i>
                    </div>
                    <p>overview</p>
                  </a>
                </Link>
              </span>
            )}
          </style.Div_left_part>
          <style.Div_right_part menuIsOpen={menuOpen}>
            <style.Div_header_item isAboutPage={isAboutPage} menuIsOpen={menuOpen} onMouseEnter={HandleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleSearchMenu} routerPath={routerPath} searchMenuIsOpen={searchMenuIsOpen}>
              {/* search Menu  */}
              {!searchMenuIsOpen ? (
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" style={{ transform: "matrix(0.9, 0, 0, 0.9, 0, 0) " }}>
                    <line class="search-button__dash" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" x1="11.9" y1="11.9" x2="15" y2="15"></line>
                    <line class="search-button__dash2" fill="none" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" x1="9" y1="9" x2="9" y2="9"></line>
                    <circle class="search-button__circle" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" cx="7.2" cy="7.2" r="6.2" data-svg-origin="1 1" transform="matrix(1,0,0,1,0,0)"></circle>
                  </svg>
                </span>
              ) : (
                <span className="close">
                  <i class="fal fa-times"></i>
                </span>
              )}
              <span className="search">id-index</span>
            </style.Div_header_item>
            <style.Div_header_item className="menu-items" isAboutPage={isAboutPage} menuIsOpen={menuOpen} onClick={handleMenu} routerPath={routerPath} searchMenuIsOpen={searchMenuIsOpen}>
              {/* humbugger Menu  */}

              {!menuOpen ? (
                <span>
                  <svg id="menu-svg" width="16" height="16" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" style={{ transform: "matrix(0.9, 0, 0, 0.9, 0, 0)" }}>
                    <g fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5">
                      <path d="m.8.8h14" class="burger__bun burger__bun--first" style={{ transformOrigin: "0px 0px 0px" }} data-svg-origin="0.800000011920929 0.800000011920929" transform="matrix(1,0,0,1,0,0)"></path>
                      <path d="m.8 6.8h14" class="burger__meat" style={{ transformOrigin: "0px 0px 0px" }} data-svg-origin="7.800000011920929 6.800000190734863" transform="matrix(1,0,0,1,0,0)"></path>
                      <path d="m.8 12.8h14" class="burger__bun burger__bun--last" style={{ transformOrigin: "0px 0px 0px" }} data-svg-origin="0.800000011920929 12.800000190734863" transform="matrix(1,0,0,1,0,0)"></path>
                    </g>
                  </svg>
                </span>
              ) : (
                <span className="close-menu">
                  <i class="fal fa-times"></i>
                </span>
              )}
              <span className="menu">menu</span>
            </style.Div_header_item>
          </style.Div_right_part>
        </style.Div_header_container>
      </style.Div_header_wrapper>
      <Menu menuIsOpen={menuOpen} />
      <SearchMenu menuIsOpen={searchMenuIsOpen} />
    </motion.div>
  );
}

export default HeaderContainer;
