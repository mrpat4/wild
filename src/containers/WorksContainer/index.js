import Footer from "reusableComponents/Footer";
import Main from "components/WorksComponent/Main";
import { useTranslation } from "next-i18next";
import ElementContainer from "reusableComponents/ElementContainer";
import { workPageData } from "../../seed";
import { animateExit } from "../../components/Ui/animation";
import style from "./Style";

function WorksContainer() {
  const { t } = useTranslation("work");
  return (
    <>
      <Main data={workPageData} t={t} />
      <Footer />
      <style.Div_animation variants={animateExit} initial="hidden" exit="exit" className="animateIt"></style.Div_animation>
    </>
  );
}

export default WorksContainer;
