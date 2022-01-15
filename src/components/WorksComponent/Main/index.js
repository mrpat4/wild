import { animateComponentExit } from "components/Ui/animation";
import Link from "next/link";
import { Children, useState } from "react";
import QuickMenu from "reusableComponents/QuickMenu";
import style from "./Style";
// cloudinary
import { Image, Placeholder, Video } from "cloudinary-react";

function Main({ data, t }) {
  const [quickMenuIsOpen, setQuickMenuIsOpen] = useState(false);
  const [quickMenuData, SetQuickMenuData] = useState([]);
  const [quickTitle, setQuickTitle] = useState("");

  const handleQuickMenu = (item) => {
    SetQuickMenuData(item.quickAccess);
    setQuickTitle(item.title);
    setQuickMenuIsOpen(true);
  };
  return (
    <style.Div_Main_works_container variants={animateComponentExit} exit="exit" initial="hidden" animate="show">
      <style.Div_h1_wrapper>
        <h1>
          {t("title.firstPart")}
          <span>{t("title.secondPart")}</span>,<span>{t("title.thirdPart")}</span>,<span>{t("title.fourthPart")}</span>,<span>{t("title.fifthPart")} </span>
          {t("title.sixthPart")}
          <span>{t("title.seventhPart")}</span>.
        </h1>
        {/* <h1>
          We innovate
          <span>Digital Campaigns</span>,<span>Platforms</span>,<span>Corporate Websites</span>,<span>Content </span>
          and
          <span>other stuff</span>.
        </h1> */}
      </style.Div_h1_wrapper>
      <div>
        <style.Ul_works_list>
          {Children.toArray(
            data.map((item) => (
              <li>
                <style.Div_image_wrapper>
                  <Link scroll={false} href={`/work/${item.title}`}>
                    <a>
                      {/* <img src={item.img} alt={item.img} /> */}
                      <Image publicId={item.publicId} cloud_name="nexprover" loading="lazy" dpr="auto" responsive crop="scale" responsiveUseBreakpoints="true">
                        <Placeholder type="blur"></Placeholder>
                      </Image>
                    </a>
                  </Link>
                  <div className="quick" onClick={() => handleQuickMenu(item)}>
                    <img src={item.img} alt={item.img} />
                    <i class="fas fa-play"></i>
                  </div>
                </style.Div_image_wrapper>
                <style.Div_text_wrapper>
                  <Link scroll={false} href={`/work/${item.title}`}>
                    <a className="code">{item.code}</a>
                  </Link>
                  <Link scroll={false} href={`/work/${item.title}`}>
                    <a className="title">{item.title}</a>
                  </Link>
                </style.Div_text_wrapper>
              </li>
            ))
          )}
        </style.Ul_works_list>
      </div>
      <QuickMenu menuIsOpen={quickMenuIsOpen} setMenuIsOpen={setQuickMenuIsOpen} data={quickMenuData} title={quickTitle} />
    </style.Div_Main_works_container>
  );
}

export default Main;
