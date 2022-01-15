import { Children, useState } from "react";
import ElementContainer from "reusableComponents/ElementContainer";
import QuickMenu from "reusableComponents/QuickMenu";
import style from "./Style";
import { Swiper, SwiperSlide } from "swiper/react";

import { aboutPageData } from "../../../seed";
import { motion } from "framer-motion";
import { animateComponentExit } from "../../Ui/animation";
import { Image, Placeholder } from "cloudinary-react";

export default function TopBlackSection({ t }) {
  const [quickMenuIsOpen, setQuickMenuIsOpen] = useState(false);
  const [quickMenuData, SetQuickMenuData] = useState([]);
  const [quickTitle, setQuickTitle] = useState("");

  const handleQuickMenu = () => {
    SetQuickMenuData(aboutPageData.quickAccess);
    setQuickTitle(aboutPageData.title);
    setQuickMenuIsOpen(true);
  };

  const setting = {
    spaceBetween: 0,
    slidesPerView: 2,
    centeredSlides: true,
    grabCursor: true,
    slideToClickedSlide: true,
    breakpoints: {
      350: {
        slidesPerView: 1.1,
        spaceBetween: 20,
        centeredSlides: false,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  };

  return (
    <>
      <style.Div_topBlackSection_container variants={animateComponentExit} exit="exit" initial="hidden" animate="show">
        <style.Div_section_wrapper>
          <style.Div_header_wrapper>
            <div className="code">
              <p className="code">A / 000</p>
              <p className="title">{t("topSection.title")}</p>
            </div>
            <h1 className="main-title">
              {t("topSection.bigTitleFirstPart")}
              <style.Div_quick_wrapper>
                <div className="quick" onClick={handleQuickMenu}>
                  <img src="https://res.cloudinary.com/nexprover/image/upload/v1618840443/nexprover-website/about/wild-about-working-area_mj3nep.jpg" alt="" />
                  <i class="fas fa-play"></i>
                </div>
              </style.Div_quick_wrapper>
              {t("topSection.bigTitleSecondPart")}
            </h1>
          </style.Div_header_wrapper>
        </style.Div_section_wrapper>

        <style.Div_slider_wrapper>
          <Swiper {...setting} onSlideChange={(slideChanged) => console.log(slideChanged)} onSwiper={(swiper) => console.log(swiper)}>
            {Children.toArray(
              aboutPageData.mainSliderData.map((item, index) => (
                <SwiperSlide>
                  <div className="slider-items" index={index}>
                    {item.img && (
                      <Image publicId={item.img} cloud_name="nexprover" loading="lazy" dpr="auto" responsive crop="scale" responsiveUseBreakpoints="true">
                        <Placeholder type="blur"></Placeholder>
                      </Image>
                    )}
                    {item.video && <video autoPlay muted loop playsInline src={item.video} />}
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </style.Div_slider_wrapper>
        <style.Div_section_wrapper>
          <style.Div_subTitle_wrapper>
            <h2>{t("topSection.secondBigTitle")}</h2>
          </style.Div_subTitle_wrapper>
        </style.Div_section_wrapper>
      </style.Div_topBlackSection_container>
      <QuickMenu menuIsOpen={quickMenuIsOpen} setMenuIsOpen={setQuickMenuIsOpen} data={quickMenuData} title={quickTitle} />
    </>
  );
}
