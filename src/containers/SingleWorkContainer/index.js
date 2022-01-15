import AboutWork from "components/SinleWorkComponent/AboutWork";
import Credits from "components/SinleWorkComponent/Credits";
import CustomerReview from "components/SinleWorkComponent/CustomerReview";
import TopSection from "components/SinleWorkComponent/TopSection";
import { animateExit } from "components/Ui/animation";
import Footer from "reusableComponents/Footer";
import { singleWorkPageData } from "../../seed";
import style from "./Style";

export default function SingleWorkContainer() {
  return (
    <>
      <TopSection data={singleWorkPageData.topSectionData} />
      <AboutWork data={singleWorkPageData.aboutWorkData} />
      <CustomerReview data={singleWorkPageData.customerReviewData} />
      <Credits data={singleWorkPageData.creditsData} />
      <Footer />
      <style.Div_animation variants={animateExit} initial="hidden" exit="exit" className="animateIt"></style.Div_animation>
    </>
  );
}
