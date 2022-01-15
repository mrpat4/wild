import style from "./Style";
import { Children } from "react";

export default function SomeOtherFacts({ data }) {
  return (
    <style.Div_someOtherFacts_container>
      <h2 className="title">Some other Facts</h2>
      <ul>
        {Children.toArray(
          data.facts.map((fact) => (
            <li>
              <p>{fact.title}</p>
            </li>
          ))
        )}
      </ul>
      <p className="description">{data.description}</p>
      <a href="mailto:info@haze.com">Apply Now</a>
    </style.Div_someOtherFacts_container>
  );
}
