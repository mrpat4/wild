import Link from "next/link";
import style from "./Style";
function Footer() {
  return (
    <style.Div_footer_container>
      <style.Div_inner_container>
        <style.Div_logo_address>
          <div className="left-side">
            <h2>Haze</h2>
            <div className="contact">
              <p className="address">someWhere in the world, No:2/1A D:1 earth/solarSystem</p>
              <span className="slash">/</span>
              <a className="tel" href="tel:‭+006600000000‬‬">
                +00 660 0000000
              </a>
              <span className="slash">/</span>
              <a href="mailto:info@haze.com">info@haze.com</a>
            </div>
          </div>
        </style.Div_logo_address>
        <style.Div_privacy_social>
          <div className="privacy">
            <Link href="#">
              <a>Privacy Policy</a>
            </Link>
          </div>
          <div className="socials">
            <ul>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-medium-m"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </style.Div_privacy_social>
      </style.Div_inner_container>
    </style.Div_footer_container>
  );
}

export default Footer;
