import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";

const NewsContainer = dynamic(import("containers/NewsContainer"));
const NewsPage = () => {
  return (
    <Fragment>
      <NewsContainer />
    </Fragment>
  );
};

NewsPage.defaultLayout = true;

// export const getStaticProps = async ({ locale }) => {
//   const res = await axiosClient().get("screens/v1/homeScreen");
//   return {
//     props: {
//       res: res.data.data.payload,
//       ...(await serverSideTranslations(locale, ["NewsPage", "footer"])),
//     },
//     revalidate: 5,
//   };
// };

export const getServerSideProps = async (ctx) => {
  // const resData = await axiosClient({ token: ctx.req.cookies }).get(`screens/v1/homeScreen`);
  return {
    props: {
      // response: resData.data.data.payload,
      ...(await serverSideTranslations(ctx.locale, ["news", "global"])),
    },
    // revalidate: 5,
  };
};

export default NewsPage;
