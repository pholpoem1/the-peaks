import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { public_const } from "src/api/constant";
import { loaderState, newsListState } from "src/recoil/atom";
import { INews } from "src/recoil/interfaces";
import ImageArticle from "./widgets/image-article";

const SectionTop = () => {
  const newsList = useRecoilValue(newsListState);
  const setIsOpen = useSetRecoilState(loaderState);
  const navigate = useNavigate();

  const getNewsArticle = (apiUrl: string) => {
    setIsOpen(true);

    axios
      .get(`${apiUrl}?api-key=${public_const.apiKey}`)
      .then((res: { data: any }) => {
        // handle success
        const { response } = res.data;
        console.log("response :>> ", response.content);
        // setNewsList(results);
        setTimeout(() => {
          setIsOpen(false);
        }, 500);
      })
      .catch((error: any) => {
        // handle error
        setIsOpen(false);
        console.log(error);
      });
  };

  const onClickContent = (id: string) => {
    navigate(`/content?id=${id}`);
  };

  return (
    <>
      <div className="sectionTop">
        {newsList.length > 0
          ? newsList.slice(0, 5).map((item: INews, index: number) => {
              return (
                <div
                  className={`item item-${index + 1}`}
                  key={index}
                  onClick={() => {
                    // getNewsArticle(item.apiUrl);
                    onClickContent(item.id);
                  }}
                >
                  <ImageArticle />
                  <div
                    className={
                      index === 1 || index === 2 ? "overlay2" : "overlay"
                    }
                  >
                    <span className="webTitle">{item.webTitle}</span>
                  </div>
                </div>
              );
            })
          : undefined}
      </div>
      <div className="secondTop">
        {newsList.length > 0
          ? newsList.slice(6, 9).map((item: INews, index: number) => {
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
          : undefined}
      </div>
    </>
  );
};

export default SectionTop;
