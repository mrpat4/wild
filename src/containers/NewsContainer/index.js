import Footer from "reusableComponents/Footer";
import Main from "components/NewsComponent/Main";
import { useTranslation } from "next-i18next";
import ElementContainer from "reusableComponents/ElementContainer";
import { newsPageData } from "../../seed";
import RandomNewsForm from "components/NewsComponent/RandomNewsForm";
import { animateExit } from "components/Ui/animation";
import style from "./Style";

function NewsContainer() {
  const { t } = useTranslation(["news", "global"]);
  return (
    <>
      <ElementContainer>
        <Main data={newsPageData} t={t} />
        <RandomNewsForm t={t} />
      </ElementContainer>
      <Footer />
      <style.Div_animation variants={animateExit} initial="hidden" exit="exit" className="animateIt"></style.Div_animation>
    </>
  );
}

export default NewsContainer;
