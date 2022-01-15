import Link from "next/link";
import { Children, useEffect, useState } from "react";
import style from "./Style";
import { Swiper, SwiperSlide } from "swiper/react";

function QuickMenu({ menuIsOpen, setMenuIsOpen, data, title }) {
  console.log({ data });
  useEffect(() => {
    menuIsOpen ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
    menuIsOpen && setSliderIndex(0);
  }, [menuIsOpen]);
  const [sliderIndex, setSliderIndex] = useState(0);
  const percent = 310 / data.length;

  useEffect(() => {});
  const handleOnSlideChange = (e) => {
    console.log(e.activeIndex);
    setSliderIndex(e.activeIndex);
  };

  const setting = {
    spaceBetween: 30,
    slidesPerView: 4,
    centeredSlides: true,
    grabCursor: true,
    slideToClickedSlide: true,
    breakpoints: {
      350: {
        slidesPerView: 1.2,
        spaceBetween: 10,
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
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  };

  return (
    <style.Div_menu_container menuIsOpen={menuIsOpen}>
      <style.Div_menu_inner menuIsOpen={menuIsOpen}>
        <style.Div_top_menu>
          <style.Div_progress_wrapper>
            <div className="progressBar">
              <div className="progress">
                <svg class="story-stroke js-story-stroke" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
                  <g fill="none" stroke-width="2">
                    <circle stroke="#ff5332" cx="28" cy="28" r="27" stroke-dashoffset="0" stroke-dasharray="0" style={{ strokeDashoffset: 310 - percent * (sliderIndex + 1) + "%", strokeDasharray: "170.646px, 180.646px" }}></circle>
                  </g>
                </svg>
              </div>
              <img src={data[0]?.img} alt="" />
            </div>
            <p className="title">{title}</p>
          </style.Div_progress_wrapper>
          <div className="close-btn" onClick={() => setMenuIsOpen(!menuIsOpen)}>
            <i class="fal fa-times"></i>
          </div>
        </style.Div_top_menu>

        <style.Div_slider_container menuIsOpen={!menuIsOpen}>
          {menuIsOpen ? (
            <Swiper {...setting} onSlideChange={handleOnSlideChange} onSwiper={(swiper) => console.log(swiper)}>
              {Children.toArray(
                data.map((item, index) => (
                  <SwiperSlide>
                    <div className="slider-items" index={index}>
                      {item.img && <img src={item.img} alt={item.title} />}
                      {item.video && <video autoPlay muted loop playsInline src={item.video} />}
                    </div>
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          ) : (
            ""
          )}
        </style.Div_slider_container>
      </style.Div_menu_inner>
    </style.Div_menu_container>
  );
}

export default QuickMenu;
