import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { public_const } from "src/api/constant";
import Layout from "src/components/layout";
import SectionNews from "src/components/section-news";
import SectionTitle from "src/components/section-title";
import { loaderState, newsListState, textState } from "src/recoil/atom";
import SectionTop from "../../components/section-top";

const Home = () => {
  const setNewsList = useSetRecoilState(newsListState);
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
    [setNewsList, setIsOpen]
  );

  useEffect(() => {
    getNewsArticle(undefined);
  }, [getNewsArticle]);

  return (
    <Layout>
      <SectionTitle getNewsArticle={getNewsArticle} />
      <SectionTop />
      <SectionNews />
    </Layout>
  );
};

export default Home;
