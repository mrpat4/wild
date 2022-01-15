// import video from "../../../../public/images/hero.mp4";
import FooterMain from "containers/FooterMain";
import { Children, useEffect, useState } from "react";
import style from "./Style";
import Link from "next/link";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { animateComponentExit } from "components/Ui/animation";

function Main({ data }) {
  // ================ states =========================

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [transformState, setTransform] = useState(null);
  const [screenSize, setScreenSize] = useState(null);

  // ================ handlers =========================
  const handleSwipe = (e) => {
    setActiveSlideIndex(e);
  };
  const mouseDown = (e) => {
    setIsMouseDown(true);
  };

  const mouseUp = () => {
    setIsMouseDown(false);

    setTransform(0);
  };
  const mouseMove = (e) => {
    if (isMouseDown) {
      let slick = document.querySelector(".slick-track");
      let transformAmount = slick.style.transform;
      let splitTransform = transformAmount.split("translate3d")[1].split(",")[0].split("(")[1].split("px")[0];
      let crossScreen = screenSize * (activeSlideIndex + 1);
      console.log(+crossScreen + +splitTransform);
      setTransform(+crossScreen + +splitTransform);
    }
  };
  // ================ slider setting =========================

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    // onSwipe: handleSwipe,
    afterChange: handleSwipe,
  };

  // ================ effects =========================

  useEffect(() => {
    document.querySelector(".slick-list").style.height = "100vh";
  });

  useEffect(() => {
    let screen = window.screen.width;
    setScreenSize(screen);
  }, []);
  return (
    <motion.div variants={animateComponentExit} exit="exit" initial="hidden" animate="show" style={{ marginTop: "-6.01em" }}>
      <Slider {...settings}>
        {Children.toArray(
          data.map((slider) => (
            <style.Div_slider_wrapper onMouseDown={mouseDown} onMouseMove={mouseMove} onMouseUp={mouseUp}>
              <video muted="true" autoplay="true" loop="true" playsinline="true" id="heroVideo">
                <source src={slider.video} type="video/mp4" />
              </video>
              <style.Div_text>
                <div style={{ transform: `translateX(${transformState / 2}px)`, transition: "0.5s linear" }}>
                  <p className="title">{slider.code}</p>
                  <p className="desc">{slider.title}</p>
                  <Link href={`/work/${slider.title}`}>
                    <a className="btn">
                      <p>View Project</p>
                      <span>
                        <i class="far fa-long-arrow-alt-right"></i>
                      </span>
                    </a>
                  </Link>
                </div>
              </style.Div_text>
            </style.Div_slider_wrapper>
          ))
        )}
      </Slider>
      {/* <style.Div_main>
        <video playsinline autoplay muted loop id="heroVideo" width="" height="">
          <source src="https://res.cloudinary.com/nexprover/video/upload/v1618398291/nexprover-website/hero_c3kuut.mp4" type="video/mp4" />
        </video>
      </style.Div_main> */}
      {/* <style.Div_text>
        <p className="title">nexprover</p>
        <p className="desc">Expensify - Merging Product Demo With Campaign</p>
        <Link href="#">
          <a className="btn">
            <p>More info</p>
            <span>
              <i class="far fa-long-arrow-alt-right"></i>
            </span>
          </a>
        </Link>
      </style.Div_text> */}
      <FooterMain />
    </motion.div>
  );
}

export default Main;
