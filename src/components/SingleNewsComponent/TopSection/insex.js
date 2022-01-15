import { Image, Placeholder } from "cloudinary-react";
import { animateComponentExit } from "components/Ui/animation";
import { Children } from "react";
import style from "./Style";

export default function TopSection({ data }) {
  return (
    <style.Div_topSection_container variants={animateComponentExit} exit="exit" initial="hidden" animate="show">
      <style.Div_header>
        <p className="code">{data.code}</p>
        <h1 className="title">{data.title}</h1>
        <style.Div_posted_wrapper>
          <style.Div_posted_item>
            <strong>Posted:</strong>
            <p>{data.posted}</p>
          </style.Div_posted_item>
          <style.Div_posted_item>
            <strong>Words:</strong>
            <p>{data.words}</p>
          </style.Div_posted_item>
        </style.Div_posted_wrapper>
        <style.Div_img_wrapper>
          {/* <img src={data.heroImage} alt={data.title} /> */}
          <Image publicId={data.publicId} cloud_name="nexprover" loading="lazy" dpr="auto" responsive crop="scale" responsiveUseBreakpoints="true">
            <Placeholder type="blur"></Placeholder>
          </Image>
        </style.Div_img_wrapper>
        <style.Div_apply_now>
          <a href="mailto:info@haze.com">Apply Now</a>
          <p className="description">{data.description}</p>
          <ul>
            <h2>What we're looking for</h2>
            {Children.toArray(
              data.requirements.map((requirement) => (
                <li>
                  <p>{requirement.title}</p>
                </li>
              ))
            )}
          </ul>
        </style.Div_apply_now>
      </style.Div_header>
    </style.Div_topSection_container>
  );
}
