// import { ApolloProvider } from "@apollo/client";
// import { useApollo } from "../src/lib/apollo";
// import { wrapper } from "../src/lib/storeConfig";
// import App from "next/app";
import { ThemeProvider } from "styled-components";
import { appWithTranslation } from "next-i18next";
import DynamicLayout from "../src/hoc/DynamicLayout";
import GlobalStyle from "../public/styles/global-styles";
import "react-perfect-scrollbar/dist/css/styles.css";
import "slick-carousel/slick/slick.css";

// import "../public/fonts/fontawesome/css/all.css";
import themes from "values/const/themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "reusableComponents/Loading";
// Import Swiper styles
import "swiper/swiper.min.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  // const apolloClient = useApollo(pageProps.initialApolloState);

  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    // <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      {/* {pageLoading ? <Loading /> : <DynamicLayout Component={Component} pageProps={pageProps} />} */}
      <AnimatePresence exitBeforeEnter>
        <DynamicLayout Component={Component} pageProps={pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
    // </ApolloProvider>
  );
}

// MyApp.getInitialProps = async (props) => {
//   return {
//     ...(await App.getInitialProps(props)),
//   };
// };

// export default wrapper.withRedux(appWithTranslation(MyApp));
export default appWithTranslation(MyApp);
