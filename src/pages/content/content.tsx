import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { public_const } from "src/api/constant";
import Layout from "src/components/layout";
import ButtonBookmark from "src/components/widgets/button-bookmark";
import {
  bookmarkListState,
  bookmarkState,
  contentState,
  loaderState,
  showToastAdd,
  showToastRemove,
} from "src/recoil/atom";
import { INews } from "src/recoil/interfaces";
import { findBookmarkList } from "src/recoil/state";

const Content = () => {
  const location = useLocation();
  const strLocation = location.search;
  const id = new URLSearchParams(strLocation).get("id");
  const setIsOpen = useSetRecoilState(loaderState);
  const [content, setContent] = useRecoilState(contentState);
  const setBookmarkStatus = useSetRecoilState(bookmarkState);
  const [bookmarkList, setBookmarkList] = useRecoilState(bookmarkListState);
  const setToastRemove = useSetRecoilState(showToastRemove);
  const setToastAdd = useSetRecoilState(showToastAdd);

  const findBooking = useRecoilValue(findBookmarkList);

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
    setBookmarkStatus(false);
    getContent();
  }, [getContent, setBookmarkStatus]);

  const date_news = new Date(content.webPublicationDate).toUTCString();

  const onChangeBookmark = (content: INews) => {
    let _bookmarkList = bookmarkList;
    if (findBooking) {
      _bookmarkList = bookmarkList.filter((item) => item.id !== content.id);
      setToastRemove(true);
    } else {
      _bookmarkList = [..._bookmarkList, content];
      setToastAdd(true);
    }
    setBookmarkList(_bookmarkList);
    localStorage.setItem("bookmarkList", JSON.stringify(_bookmarkList));
    setTimeout(() => {
      setToastRemove(false);
      setToastAdd(false);
    }, 3000);
  };

  return (
    <Layout>
      <div className="col-content">
        <div className="title">
          <div>
            <ButtonBookmark onClick={() => onChangeBookmark(content)} />
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
