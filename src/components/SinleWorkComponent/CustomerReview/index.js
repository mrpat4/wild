import style from "./Style";

export default function CustomerReview({ data }) {
  return (
    <style.Div_customerReview_container>
      <style.Div_full_width>
        {data.image && <img src={data.img} alt={data.title} />}
        {data.video && <video autoPlay muted loop playsInline src={data.video} />}
      </style.Div_full_width>
      <style.Div_review>
        <h2>{data.review}</h2>
        <div className="name">
          <strong className="name">{data.name}</strong>
          <p className="post">{data.post}</p>
        </div>
      </style.Div_review>
    </style.Div_customerReview_container>
  );
}
