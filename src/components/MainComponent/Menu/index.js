import Link from "next/link";
import style from "./Style";
function Menu({ menuIsOpen }) {
  return (
    <style.Div_menu_container menuIsOpen={menuIsOpen}>
      <style.Div_menu_inner menuIsOpen={menuIsOpen}>
        <ul className="menu-list">
          <li>
            <Link href="/work">
              <a>
                <div>
                  work
                  <span class="hovered-text">
                    <span>W / 000</span>
                  </span>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>
                <div>
                  about
                  <span class="hovered-text">
                    <span>A / 000</span>
                  </span>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/news">
              <a>
                <div>
                  news
                  <span class="hovered-text">
                    <span>N / 000</span>
                  </span>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>
                <div>
                  contact
                  <span class="hovered-text">
                    <span>C / 000</span>
                  </span>
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </style.Div_menu_inner>
      {/* <style.Div_footer menuIsOpen={menuIsOpen}>
        <style.Div_privacy>
          <a href="#">privacy policy</a>
          <a href="#">imprint</a>
        </style.Div_privacy>
        <style.Div_social>
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
        </style.Div_social>
      </style.Div_footer> */}
    </style.Div_menu_container>
  );
}

export default Menu;
