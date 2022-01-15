import React from "react";
import dynamic from "next/dynamic";

// import HeaderContainer from "containers/HeaderContainer";
// import FooterContainer from "containers/FooterContainer";
import Meta from "reusableComponents/Meta";
import Loading from "reusableComponents/Loading";
const HeaderContainer = dynamic(() => import("containers/HeaderContainer"), { ssr: false, loading: () => <Loading /> });
// const FooterContainer = dynamic(import("containers/FooterContainer"));

// import Header from "../containers/HeaderContainer";
const DynamicLayout = ({ Component, pageProps }) => {
  // useEffect(() => {
  //   const buttons = document.querySelectorAll(".button-click");
  //   //console.log({ buttons });
  //   buttons.forEach((btn) => {
  //     btn.addEventListener("click", function (e) {
  //       const x = e.clientX - e.target.offsetLeft;
  //       const y = e.clientY - e.target.offsetTop;
  //       //   let x = e.target.offsetLeft;
  //       //   let y = e.target.offsetTop;
  //       // //console.log({ buttons, x, y, e });
  //       const ripples = document.createElement("span");
  //       ripples.classList.add("ripples");
  //       ripples.style.left = `${x}px`;
  //       ripples.style.top = `${y}px`;
  //       this.appendChild(ripples);
  //       setTimeout(() => {
  //         ripples.remove();
  //       }, 1000);
  //     });
  //     return () => btn.removeEventListener;
  //   });
  // }, []);

  if (Component.defaultLayout) {
    return (
      <>
        <Meta />
        <HeaderContainer />
        <>
          <Component {...pageProps} />
        </>
        {/* <FooterContainer /> */}
      </>
    );
  } else return <Component {...pageProps} />;
};

export default DynamicLayout;
