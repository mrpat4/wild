import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import style from "./Style";

const convertBreadcrumb = (string) => {
  return string.replace(/-/g, " ").replace(/%20/g, " ");
};

const Breadcrumbs = ({ title }) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  //console.log({ TITLE: title });

  useEffect(() => {
    if (router) {
      let linkPath = router.asPath.split("/");
      linkPath.shift();
      linkPath.pop();

      const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: path, href: "/" + linkPath.slice(0, i + 1).join("/") };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <style.Div_breadCrumbers_container>
      <style.Ul>
        <li>
          <a href="/">home</a>
        </li>
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <li key={breadcrumb.href}>
              <span>&#x3e;</span>
              <Link href={breadcrumb.href}>
                <a>{convertBreadcrumb(breadcrumb.breadcrumb)}</a>
              </Link>
            </li>
          );
        })}
        <li>
          <span>&#x3e;</span>
          {/* <Link href={breadcrumb.href}> */}
          <span className="title">{title}</span>
          {/* </Link> */}
        </li>
      </style.Ul>
    </style.Div_breadCrumbers_container>
  );
};

export default Breadcrumbs;
