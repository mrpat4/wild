import RandomNewsForm from "components/NewsComponent/RandomNewsForm";
import SomeOtherFacts from "components/SingleNewsComponent/SomeOtherFacts";
import TopSection from "components/SingleNewsComponent/TopSection/insex";
import WhatYouGet from "components/SingleNewsComponent/WhatYouGet";
import YouMayAlsoLike from "components/SingleNewsComponent/YouMayAlsoLike";
import { animateExit } from "components/Ui/animation";
import ElementContainer from "reusableComponents/ElementContainer";
import Footer from "reusableComponents/Footer";
import { singleNewsPageData } from "../../seed";
import style from "./Style";

export default function SingleNewsContainer() {
  return (
    <>
      <ElementContainer>
        <TopSection data={singleNewsPageData.topSectionData} />
        <WhatYouGet data={singleNewsPageData.whatYouGetData} />
        <SomeOtherFacts data={singleNewsPageData.someOtherFacts} />
        <YouMayAlsoLike data={singleNewsPageData.youAlsoMayLikeData} />
        <RandomNewsForm />
      </ElementContainer>
      <Footer />
      <style.Div_animation variants={animateExit} initial="hidden" exit="exit" className="animateIt"></style.Div_animation>
    </>
  );
}
