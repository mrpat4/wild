import { Image, Placeholder } from "cloudinary-react";
import Link from "next/link";
import { Children } from "react";
import style from "./Style";

export default function YouMayAlsoLike({ data }) {
  return (
    <style.Div_youMayAlsoLike_container>
      <h3 className="title">you may also like this</h3>
      <style.Div_list_wrapper>
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

                      {/* <div className="quick" onClick={() => handleQuickMenu(item)}>
                    <img src={item.img} alt="" />
                    <i class="fas fa-play"></i>
                  </div> */}
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
      </style.Div_list_wrapper>
    </style.Div_youMayAlsoLike_container>
  );
}
