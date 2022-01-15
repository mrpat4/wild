import TopHeader from "components/ArticleComponent/TopHeader";
import SingleResult from "components/SearchComponent/SingleResult";
import PaginationM from "components/ui/PaginationM";
import useQueryString from "hoc/useQueryString";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Children } from "react";
import Divider from "reusableComponents/Divider";
import ElementContainer from "reusableComponents/ElementContainer";
import style from "./Style";

function SearchContainer({ data }) {
  const { t } = useTranslation("search");
  const route = useRouter();
  const QueryString = useQueryString({});
  const limit = 1;

  const handlePagination = (e) => {
    console.log({ eeeeeeeeeeeeeeeeeeeeeeeeee: route.query });
    route.push(`/search?query=${route.query.query}&page=${e}`);
  };
  return (
    <>
      <Divider />
      <ElementContainer>
        <TopHeader title={data.response.articles} />
        <style.Div_search_container>
          <h1>{t("search.title")}</h1>
          {data.response.count > 0 ? (
            <p className="result">
              {/* {data.response.count} results for "{route.query.query}" */}
              {t("search.result", { value: data.response.count, name: route.query.query })}
            </p>
          ) : (
            <p className="result">
              {t("search.no-result")} "{route.query.query}"
            </p>
          )}
          <style.Div_results_wrapper>
            <h3>{t("search.subtitle")}</h3>
            {Children.toArray(data.response.articles.map((article) => <SingleResult data={article} />))}
          </style.Div_results_wrapper>
          <div>
            <PaginationM limited={2} pages={data.response.count / limit} activePage={QueryString.page} onClick={handlePagination} />
          </div>
        </style.Div_search_container>
      </ElementContainer>
    </>
  );
}

export default SearchContainer;
