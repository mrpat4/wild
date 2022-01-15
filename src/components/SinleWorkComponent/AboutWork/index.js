import style from "./Style";
export default function AboutWork({ data }) {
  return (
    <style.Div_aboutWork_container>
      <style.Div_img_container>
        <img src={data.img} alt="something" />
      </style.Div_img_container>
      <style.Div_description>
        <p>{data.description}</p>
      </style.Div_description>
    </style.Div_aboutWork_container>
  );
}
