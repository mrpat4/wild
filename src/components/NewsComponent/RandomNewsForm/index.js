import style from "./Style";

export default function RandomNewsForm({ t }) {
  return (
    <style.Div_randomNewsContainer>
      <h2>{t("global:randomNews.title")}</h2>
      <style.Div_form_container>
        <h2>{t("global:randomNews.enterMail")}</h2>
        <div className="input-container">
          <span>(</span>
          <form action="">
            <input type="text" name="email" id="email" placeholder="info@haze.com" />
          </form>
          <span>)</span>
        </div>
      </style.Div_form_container>
    </style.Div_randomNewsContainer>
  );
}
