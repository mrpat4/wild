import { Children } from "react";
import style from "./Style";

export default function Credits({ data }) {
  return (
    <style.Div_credits_container>
      <style.Div_video_wrapper>{Children.toArray(data.videos.map((video) => <video autoPlay muted loop playsInline src={video.link}></video>))}</style.Div_video_wrapper>
      <style.Div_credits>
        <ul>
          {Children.toArray(
            data.team.map((item) => (
              <li>
                <strong>{item.title}</strong>
                <p>{item.name}</p>
              </li>
            ))
          )}
        </ul>
      </style.Div_credits>
    </style.Div_credits_container>
  );
}
