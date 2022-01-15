import Link from "next/link";
import { useTranslation } from "next-i18next";
import DropDown from "reusableComponents/DropDown";
import ElementContainer from "reusableComponents/ElementContainer";
import style from "./Style";

function FooterContainer() {
  const countries = ["english", "deutsch", "espanol", "france", "turkey"];

  const { t } = useTranslation("footer");

  return (
    <ElementContainer>
      <style.Div_footer_container>
        <style.Div_text_wrapper>
          <Link href="/">
            <a>
              <span>improver</span>digital
            </a>
          </Link>
          <div className="dropDown_wrapper">
            <DropDown items={countries} border="none" />
          </div>
        </style.Div_text_wrapper>
        <style.Div_terms>
          <Link href="#">
            <a>{t("footer.terms")}</a>
          </Link>
          <Link href="#">
            <a>{t("footer.privacy")}</a>
          </Link>
        </style.Div_terms>
      </style.Div_footer_container>
    </ElementContainer>
  );
}

export default FooterContainer;
