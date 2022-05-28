import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import SectionTitle from "src/components/section-title";
import Container from "src/components/widgets/container";
import Header from "src/components/widgets/header";
import Loader from "src/components/widgets/loader";
import { loaderState, newsListState, textState } from "src/recoil/atom";
// import { INews } from "src/recoil/interfaces";
import SectionTop from "../../components/section-top";

const host = "https://content.guardianapis.com";
const routeApi = "/search";
const apiKey = "59451e21-6e9e-442f-85f0-2609bf05f484";

const Home = () => {
  const setNewsList = useSetRecoilState(newsListState);
  const query = useRecoilValue(textState);
  const setIsOpen = useSetRecoilState(loaderState);

  const getNewsArticle = useCallback(
    (orderBy: string | undefined) => {
      let param = `api-key=${apiKey}`;
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
        .get(`${host}${routeApi}?${param}`)
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
    [query, setNewsList, setIsOpen]
  );

  useEffect(() => {
    getNewsArticle(undefined);
  }, [getNewsArticle]);

  return (
    <>
      <Header />
      <div className="toolbar"></div>
      <Container>
        <>
          <Loader />
          <SectionTitle getNewsArticle={getNewsArticle} />
          <SectionTop />
        </>
      </Container>
    </>
  );
};

export default Home;
