import Link from "next/link";
import { Children } from "react";
import style from "./Style";
function SearchMenu({ menuIsOpen }) {
  const menuData = [
    {
      title: "work",
      subMenu: [
        { code: "w / 033", title: "falter's inferno" },
        { code: "w / 033", title: "falter's inferno" },
        { code: "w / 033", title: "falter's inferno" },
        { code: "w / 033", title: "falter's inferno" },
        { code: "w / 033", title: "falter's inferno" },
        { code: "w / 033", title: "falter's inferno" },
        { code: "w / 033", title: "falter's inferno" },
        { code: "w / 033", title: "falter's inferno" },
        { code: "w / 033", title: "falter's inferno" },
        { code: "w / 033", title: "falter's inferno" },
        { code: "w / 033", title: "falter's inferno" },
        { code: "w / 033", title: "falter's inferno" },
        { code: "w / 033", title: "falter's inferno" },
        { code: "w / 033", title: "falter's inferno" },
        { code: "w / 033", title: "falter's inferno" },
      ],
    },
    { title: "about", subMenu: [{ code: "a / 000", title: "about" }] },
    {
      title: "news",
      subMenu: [
        { code: "n / 033", title: "new office" },
        { code: "n / 033", title: "new office" },
        { code: "n / 033", title: "new office" },
        { code: "n / 033", title: "8 Learning form working aboard in lisbon" },
        { code: "n / 033", title: "new office" },
        { code: "n / 033", title: "new office" },
        { code: "n / 033", title: "new office" },
      ],
    },
    {
      title: "random",
      subMenu: [
        { code: "r / 033", title: "sparkAr" },
        { code: "r / 033", title: "sparkAr" },
        { code: "r / 033", title: "sparkAr" },
        { code: "r / 033", title: "sparkAr" },
        { code: "r / 033", title: "sparkAr" },
        { code: "r / 033", title: "sparkAr" },
      ],
    },
    {
      title: "employees",
      subMenu: [
        { code: "e / 033", title: "steve jobs" },
        { code: "e / 033", title: "steve jobs" },
        { code: "e / 033", title: "steve jobs" },
        { code: "e / 033", title: "steve jobs" },
        { code: "e / 033", title: "steve jobs" },
        { code: "e / 033", title: "steve jobs" },
        { code: "e / 033", title: "steve jobs" },
        { code: "e / 033", title: "steve jobs" },
        { code: "e / 033", title: "steve jobs" },
      ],
    },
  ];
  return (
    <style.Div_menu_container menuIsOpen={menuIsOpen}>
      <form action="">
        <input type="text" name="search" id="search" placeholder="Start typing" autocomplete="off" />
      </form>
      <style.Div_menu_inner menuIsOpen={menuIsOpen}>
        {Children.toArray(
          menuData.map((item) => (
            <>
              <p>{item.title}</p>
              <ul>
                {Children.toArray(
                  item.subMenu.map((menu) => (
                    <li>
                      <Link href="#">
                        <a>
                          <span className="code">{menu.code}</span>
                          <span className="title">{menu.title}</span>
                        </a>
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </>
          ))
        )}
      </style.Div_menu_inner>
    </style.Div_menu_container>
  );
}

export default SearchMenu;
