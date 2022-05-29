import axios from "axios";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { public_const } from "src/api/constant";
import { loaderState } from "src/recoil/atom";
import { INews } from "src/recoil/interfaces";
import { newsListSections } from "src/recoil/state";
import ImageArticle from "./widgets/image-article";

const SectionNews = () => {
  const data = useRecoilValue(newsListSections);
  const setIsOpen = useSetRecoilState(loaderState);

  const getNewsArticle = (apiUrl: string) => {
    setIsOpen(true);

    axios
      .get(`${apiUrl}?api-key=${public_const.apiKey}`)
      .then((res: any) => {
        // handle success
        const { response } = res;
        console.log("response.content :>> ", response.content);
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

  return (
    <>
      {Object.keys(data).map((item: any, i: number) => {
        const news: INews[] = (data as any)[item];
        if (news.length > 0) {
          return (
            <div style={{ marginTop: 32 }} key={i}>
              <div className="title">
                <h1>{item}</h1>
              </div>
              <div className="secondTop">
                {news.length > 0
                  ? news.map((item: INews, index: number) => {
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
            </div>
          );
        } else {
          return undefined;
        }
      })}
    </>
  );
};

export default SectionNews;
