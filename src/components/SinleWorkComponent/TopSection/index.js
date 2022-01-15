import { Image, Placeholder } from "cloudinary-react";
import { animateComponentExit } from "components/Ui/animation";
import Link from "next/link";
import { Children, useState } from "react";
import ElementContainer from "reusableComponents/ElementContainer";
import QuickMenu from "reusableComponents/QuickMenu";
import style from "./Style";
export default function ({ data }) {
  const [quickMenuIsOpen, setQuickMenuIsOpen] = useState(false);
  const [quickMenuData, SetQuickMenuData] = useState([]);
  const [quickTitle, setQuickTitle] = useState("");
  const [showHeight, setShowHeight] = useState(false);

  const handleQuickMenu = (data) => {
    SetQuickMenuData(data.quickAccess);
    setQuickTitle(data.title);
    setQuickMenuIsOpen(true);
  };

  return (
    <style.Div_top_section_container variants={animateComponentExit} exit="exit" initial="hidden" animate="show">
      <ElementContainer>
        <style.Div_header>
          <p className="code">{data.code}</p>
          <div className="title-quick-wrapper">
            <h1 className="title">{data.title}</h1>
            <div className="quick-wrapper">
              <div className="quick" onClick={() => handleQuickMenu(data)}>
                <img src={data.quickAccess[0].img} alt={data.quickAccess[0].title} />
                <i class="fas fa-play"></i>
              </div>
            </div>
          </div>
        </style.Div_header>
      </ElementContainer>
      <style.Div_image_section>
        <div className="left-side">
          {/* <img src={data.heroImage} alt={data.title} /> */}
          <Image publicId={data.heroImage} cloud_name="nexprover" width="auto" loading="lazy" dpr="auto" responsive crop="scale" responsiveUseBreakpoints="true">
            <Placeholder type="blur"></Placeholder>
          </Image>
          <style.Div_information className="information" onClick={() => setShowHeight(!showHeight)} showHeight={showHeight}>
            <p>Information</p>
            <i class="fal fa-plus"></i>
          </style.Div_information>
        </div>
        <div className="right-side">
          <div className="quick-wrapper">
            <div className="quick" onClick={() => handleQuickMenu(data)}>
              <img src={data.quickAccess[0].img} alt={data.quickAccess[0].title} />
              <i class="fas fa-play"></i>
              <style.Div_tooltip className="tooltip">
                <p>Visit Project</p>
                <span>
                  <i class="far fa-angle-right"></i>
                </span>
              </style.Div_tooltip>
            </div>
          </div>
          <div className="link">
            <a href={data.description.link}>
              <i class="fal fa-arrow-up"></i>
              <style.Div_tooltip className="tooltip">
                <p>Visit Project</p>
                <span>
                  <i class="far fa-angle-right"></i>
                </span>
              </style.Div_tooltip>
            </a>
          </div>
        </div>
      </style.Div_image_section>
      <style.Div_client_and_description>
        <style.Div_client className="left-side" showHeight={showHeight}>
          <style.Div_client_items_wrapper>
            <strong>client</strong>
            <span>{data.client}</span>
          </style.Div_client_items_wrapper>
          <style.Div_client_items_wrapper>
            <strong>focus</strong>
            <span>{data.focus}</span>
          </style.Div_client_items_wrapper>
          <style.Div_client_items_wrapper>
            <strong>category</strong>
            <div className="category-list">{Children.toArray(data.categories.map((item) => <span>{item.title}</span>))}</div>
          </style.Div_client_items_wrapper>
        </style.Div_client>
        <style.Div_client_description>
          <h3 className="title">{data.description.title}</h3>
          <p className="desc">{data.description.description}</p>
          <a href={data.description.link}>
            <span>Go to website</span>
            <span>
              <i class="fal fa-arrow-up"></i>
            </span>
          </a>
        </style.Div_client_description>
      </style.Div_client_and_description>
      <QuickMenu menuIsOpen={quickMenuIsOpen} setMenuIsOpen={setQuickMenuIsOpen} data={quickMenuData} title={quickTitle} />
    </style.Div_top_section_container>
  );
}
