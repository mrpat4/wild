import OurTeamAndClient from "components/AboutComponent/OurTeamAndClient";
import TopBlackSection from "components/AboutComponent/TopBlackSection";
import RandomNewsForm from "components/NewsComponent/RandomNewsForm";
import Footer from "reusableComponents/Footer";
import { motion } from "framer-motion";
import { animateExit } from "../../components/Ui/animation";
import style from "./Style";
import { useTranslation } from "next-i18next";

export default function AboutContainer() {
  const { t } = useTranslation(["about", "global"]);

  return (
    <>
      <TopBlackSection t={t} />
      <OurTeamAndClient t={t} />
      <RandomNewsForm t={t} />
      <Footer />
      <style.Div_animation variants={animateExit} initial="hidden" exit="exit" className="animateIt"></style.Div_animation>
    </>
  );
}
