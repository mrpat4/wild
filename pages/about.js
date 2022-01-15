import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";

const AboutContainer = dynamic(import("containers/AboutContainer"));
const AboutPage = () => {
  return (
    <Fragment>
      <AboutContainer />
    </Fragment>
  );
};

AboutPage.defaultLayout = true;

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
      ...(await serverSideTranslations(ctx.locale, ["about", "global"])),
    },
    // revalidate: 5,
  };
};

export default AboutPage;
