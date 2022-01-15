import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";

const SingleWorkContainer = dynamic(import("containers/SingleWorkContainer"));
const SingleWorkPage = () => {
  return (
    <Fragment>
      <SingleWorkContainer />
    </Fragment>
  );
};

SingleWorkPage.defaultLayout = true;

// export const getStaticProps = async ({ locale }) => {
//   const res = await axiosClient().get("screens/v1/homeScreen");
//   return {
//     props: {
//       res: res.data.data.payload,
//       ...(await serverSideTranslations(locale, ["SingleWorkPage", "footer"])),
//     },
//     revalidate: 5,
//   };
// };

export const getServerSideProps = async (ctx) => {
  // const resData = await axiosClient({ token: ctx.req.cookies }).get(`screens/v1/homeScreen`);
  return {
    props: {
      // response: resData.data.data.payload,
      ...(await serverSideTranslations(ctx.locale, ["home", "footer"])),
    },
    // revalidate: 5,
  };
};

export default SingleWorkPage;
