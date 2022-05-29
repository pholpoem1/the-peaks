import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { public_const } from "src/api/constant";
import Layout from "src/components/layout";
import ButtonBookmark from "src/components/widgets/button-bookmark";
import { contentState, loaderState } from "src/recoil/atom";

const Content = () => {
  const location = useLocation();
  const strLocation = location.search;
  const id = new URLSearchParams(strLocation).get("id");
  const setIsOpen = useSetRecoilState(loaderState);
  const [content, setContent] = useRecoilState(contentState);

  const getContent = useCallback(
    () => {
      setIsOpen(true);
      axios
        .get(`${public_const.host}/${id}?api-key=${public_const.apiKey}`)
        .then((res: { data: any }) => {
          // handle success
          const { content } = res.data.response;
          setContent(content);
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
    [setContent, setIsOpen]
  );

  useEffect(() => {
    getContent();
  }, [getContent]);

  const date_news = new Date(content.webPublicationDate).toUTCString();

  return (
    <Layout>
      <div className="col-content">
        <div className="title">
          <div>
            <ButtonBookmark />
            <span id="date-content">{date_news}</span>
          </div>
        </div>
        <div className="cont-left">
          <h1>{content.webTitle}</h1>
          <h3>{content.webTitle}</h3>
          <hr />
          {content.webTitle}
        </div>
        <div className="cont-right">
          <img src="/assets/logo_blue.svg" alt="logo" id="logo-content" />
        </div>
      </div>
    </Layout>
  );
};

export default Content;
