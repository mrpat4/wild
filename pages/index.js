import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Loading from "reusableComponents/Loading";

const MainContainer = dynamic(() => import("containers/MainContainer"), { ssr: false, loading: () => <Loading /> });
const Homepage = () => {
  return (
    <Fragment>
      <MainContainer />
    </Fragment>
  );
};

Homepage.defaultLayout = true;

// export const getStaticProps = async ({ locale }) => {
//   const res = await axiosClient().get("screens/v1/homeScreen");
//   return {
//     props: {
//       res: res.data.data.payload,
//       ...(await serverSideTranslations(locale, ["homepage", "footer"])),
//     },
//     revalidate: 5,
//   };
// };

export const getServerSideProps = async (ctx) => {
  // const resData = await axiosClient({ token: ctx.req.cookies }).get(`screens/v1/homeScreen`);
  return {
    props: {
      // response: resData.data.data.payload,
      ...(await serverSideTranslations(ctx.locale, ["homepage", "footer"])),
    },
    // revalidate: 5,
  };
};

export default Homepage;
