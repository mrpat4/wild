import { Image, Placeholder } from "cloudinary-react";
import { Children } from "react";

import style from "./Style";

export default function WhatYouGet({ data }) {
  return (
    <style.Div_whatYouGet_container>
      <h2>What you get</h2>
      <style.Div_list_wrapper>
        <ul>
          {Children.toArray(
            data.map((item) => (
              <style.Li_list_item>
                {/* <img src={item.img} alt={item.title} /> */}
                <Image publicId={item.publicId} cloud_name="nexprover" loading="lazy" dpr="auto" responsive crop="scale" responsiveUseBreakpoints="true">
                  <Placeholder type="blur"></Placeholder>
                </Image>
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
              </style.Li_list_item>
            ))
          )}
        </ul>
      </style.Div_list_wrapper>
    </style.Div_whatYouGet_container>
  );
}
