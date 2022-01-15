import { useRouter } from "next/router";
import { Children, useState } from "react";
import style from "./Style";
function FooterMain() {
  const languages = ["en", "tr", "fr"];
  const [activeClass, setActiveClass] = useState(0);
  const router = useRouter();

  const handleMenu = (index) => {
    setActiveClass(index);
    if (index === 0) {
      router.push(router.route, router.route, { locale: "en" });
    } else if (index === 1) {
      router.push(router.route, router.route, { locale: "tr" });
    } else if (index === 2) {
      router.push(router.route, router.route, { locale: "fr" });
    }
  };
  return (
    <style.Div_footer_container>
      <style.Div_footer_inner_wrapper>
        <div className="languages">
          {/* <p>language :</p> */}
          <ul>
            {Children.toArray(
              languages.map((language, index) => (
                <li className={language === router.locale && "active"} onClick={() => handleMenu(index)}>
                  <span>{language}</span>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="social">
          {/* <p>follow us:</p> */}
          <ul>
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </style.Div_footer_inner_wrapper>
    </style.Div_footer_container>
  );
}

export default FooterMain;
