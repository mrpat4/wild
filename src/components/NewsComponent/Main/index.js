import { animateComponentExit } from "components/Ui/animation";
import Link from "next/link";
import { Children, useState } from "react";
import QuickMenu from "reusableComponents/QuickMenu";
import style from "./Style";
import { Image, Placeholder, Video } from "cloudinary-react";

function Main({ data }) {
  const [quickMenuIsOpen, setQuickMenuIsOpen] = useState(false);
  const [quickMenuData, SetQuickMenuData] = useState([]);
  const [quickTitle, setQuickTitle] = useState("");

  const handleQuickMenu = (item) => {
    SetQuickMenuData(item.quickAccess);
    setQuickTitle(item.title);
    setQuickMenuIsOpen(true);
  };
  return (
    <style.Div_Main_news_container variants={animateComponentExit} exit="exit" initial="hidden" animate="show">
      {/* <style.Div_h1_wrapper>
        <h1>
          We innovate
          <span>Digital Campaigns</span>,<span>Platforms</span>,<span>Corporate Websites</span>,<span>Content </span>
          and
          <span>other stuff</span>.
        </h1>
      </style.Div_h1_wrapper> */}
      <div>
        <style.Ul_works_list>
          {Children.toArray(
            data.map((item) => (
              <li>
                <Link href={`/news/${item.title}`}>
                  <a>
                    <style.Div_image_wrapper>
                      {/* <img src={item.img} alt="" /> */}
                      <Image publicId={item.publicId} cloud_name="nexprover" loading="lazy" dpr="auto" responsive crop="scale" responsiveUseBreakpoints="true">
                        <Placeholder type="blur"></Placeholder>
                      </Image>
                    </style.Div_image_wrapper>
                    <style.Div_text_wrapper>
                      <Link href={`/news/${item.title}`}>
                        <a className="code">{item.code}</a>
                      </Link>
                      <Link href={`/news/${item.title}`}>
                        <a className="title">{item.title}</a>
                      </Link>
                      <p className="readMore">Read More</p>
                    </style.Div_text_wrapper>
                  </a>
                </Link>
              </li>
            ))
          )}
        </style.Ul_works_list>
      </div>
      {/* <QuickMenu menuIsOpen={quickMenuIsOpen} setMenuIsOpen={setQuickMenuIsOpen} data={quickMenuData} title={quickTitle} /> */}
    </style.Div_Main_news_container>
  );
}

export default Main;
