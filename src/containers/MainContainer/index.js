import Main from "components/MainComponent/Main";
import { useTranslation } from "next-i18next";
import { mainSliderData } from "../../seed";
import { animateExit } from "../../components/Ui/animation";
import style from "./Style";

function MainContainer() {
  const { t } = useTranslation("homepage");
  return (
    <>
      <Main data={mainSliderData} />
      <style.Div_animation variants={animateExit} initial="hidden" exit="exit" className="animateIt"></style.Div_animation>
    </>
  );
}

export default MainContainer;
