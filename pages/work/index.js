import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

const WorksContainer = dynamic(import("containers/WorksContainer"));
const WorkPage = () => {
  return (
    <Fragment>
      <WorksContainer />
    </Fragment>
  );
};

WorkPage.defaultLayout = true;

// export const getStaticProps = async ({ locale }) => {
//   const res = await axiosClient().get("screens/v1/homeScreen");
//   return {
//     props: {
//       res: res.data.data.payload,
//       ...(await serverSideTranslations(locale, ["WorkPage", "footer"])),
//     },
//     revalidate: 5,
//   };
// };

export const getServerSideProps = async (ctx) => {
  // const resData = await axiosClient({ token: ctx.req.cookies }).get(`screens/v1/homeScreen`);
  return {
    props: {
      // response: resData.data.data.payload,
      ...(await serverSideTranslations(ctx.locale, ["work", "global"])),
    },
    // revalidate: 5,
  };
};

export default WorkPage;
