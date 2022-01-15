import RandomNewsForm from "components/NewsComponent/RandomNewsForm";
import ElementContainer from "reusableComponents/ElementContainer";
import Footer from "reusableComponents/Footer";
import style from "./Style";
import { animateExit, animateComponentExit } from "../../components/Ui/animation";
import { Image, Placeholder } from "cloudinary-react";
import { useTranslation } from "next-i18next";

export default function ContactContainer() {
  const { t } = useTranslation(["contact", "global"]);

  return (
    <>
      <ElementContainer>
        <style.Div_contact_container variants={animateComponentExit} exit="exit" initial="hidden" animate="show">
          <style.Div_header>
            <h1>{t("title")}</h1>
            <style.Div_social>
              <ul>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </style.Div_social>
          </style.Div_header>
          <style.Ul_inTouch>
            <li>
              <h2>{t("getInTouch")}</h2>
              <a href="#">weare@haze.com</a>
            </li>
            <li>
              <h2>{t("writeToUs")}</h2>
              <a href="#">press@haze.com</a>
            </li>
            <li>
              <h2>{t("workForUs")}</h2>
              <a href="#">jobs@haze.com</a>
            </li>
          </style.Ul_inTouch>
          <style.Div_image_wrapper>
            <Image publicId="nexprover-website/contact/wild-about-entrance-hall_fuwlb8.jpg" cloud_name="nexprover" loading="lazy" dpr="auto" responsive crop="scale" responsiveUseBreakpoints="true">
              <Placeholder type="blur"></Placeholder>
            </Image>
            <div className="two-img">
              <div className="img-wrapper">
                {/* <img src="https://res.cloudinary.com/nexprover/image/upload/v1618835862/nexprover-website/contact/wild-about-kitchen-2_ylzsnv.jpg" alt="nexprover" /> */}
                <Image publicId="nexprover-website/contact/wild-about-kitchen-2_ylzsnv.jpg" cloud_name="nexprover" loading="lazy" dpr="auto" responsive crop="scale" responsiveUseBreakpoints="true">
                  <Placeholder type="blur"></Placeholder>
                </Image>
              </div>
              <div className="img-wrapper">
                <Image publicId="nexprover-website/contact/wild-about-boot-floor_q8b5xl.jpg" cloud_name="nexprover" loading="lazy" dpr="auto" responsive crop="scale" responsiveUseBreakpoints="true">
                  <Placeholder type="blur"></Placeholder>
                </Image>
              </div>
            </div>
          </style.Div_image_wrapper>
          <style.Div_logo_address>
            <div>
              <h2>Haze</h2>
              <p>someWhere in the world, No:2/1A D:1 earth/solarSystem</p>
            </div>
          </style.Div_logo_address>
        </style.Div_contact_container>
        <RandomNewsForm t={t} />
      </ElementContainer>
      <Footer />
      <style.Div_animation variants={animateExit} initial="hidden" exit="exit" className="animateIt"></style.Div_animation>
    </>
  );
}
