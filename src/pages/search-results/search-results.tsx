import axios from "axios";
import React, { useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { public_const } from "src/api/constant";
import Layout from "src/components/layout";
import SectionTitle from "src/components/section-title";
import ImageArticle from "src/components/widgets/image-article";
import { loaderState, newsListState, textState } from "src/recoil/atom";
import { INews } from "src/recoil/interfaces";

const SearchResults = () => {
  const [newsList, setNewsList] = useRecoilState(newsListState);
  const query = useRecoilValue(textState);
  const setIsOpen = useSetRecoilState(loaderState);

  const getNewsArticle = useCallback(
    (orderBy: string | undefined) => {
      let param = `api-key=${public_const.apiKey}&section=sport|culture|lifeandstyle&page-size=200`;
      if (orderBy) {
        param = `${param}&order-by=${orderBy}`;
      } else {
        param = `${param}&order-by=newest`;
      }
      if (query) {
        param = `${param}&q=${query}`;
      }
      setIsOpen(true);
      axios
        .get(`${public_const.host}${public_const.routeApi}?${param}`)
        .then((res: { data: any }) => {
          // handle success
          const { results } = res.data.response;
          setNewsList(results);
          setTimeout(() => {
            setIsOpen(false);
          }, 500);
        })
        .catch((error: any) => {
          // handle error
          setIsOpen(false);
          console.log(error);
        });
    },
    // eslint-disable-next-line
    [setIsOpen]
  );

  return (
    <Layout>
      <SectionTitle getNewsArticle={getNewsArticle} title={"search results"} />
      <div className="secondTop">
        {newsList.length > 0 ? (
          newsList.map((item: INews, index: number) => {
            return (
              <div
                className="item"
                key={index}
                onClick={() => {
                  getNewsArticle(item.apiUrl);
                }}
              >
                <ImageArticle />
                <div className="overlay2">
                  <span className="webTitle">{item.webTitle}</span>
                </div>
              </div>
            );
          })
        ) : (
          <h3>Not found data...</h3>
        )}
      </div>
    </Layout>
  );
};

export default SearchResults;
