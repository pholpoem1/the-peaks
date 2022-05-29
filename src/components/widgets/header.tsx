import axios from "axios";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { public_const } from "src/api/constant";
import { loaderState, newsListState, textState } from "src/recoil/atom";
import Logo from "./logo";
import SearchBox from "./search-box";

const Header = () => {
  const setNewsList = useSetRecoilState(newsListState);

  const query = useRecoilValue(textState);
  const setIsOpen = useSetRecoilState(loaderState);
  const navigate = useNavigate();

  const onSearch = useCallback(
    async (orderBy: string | undefined) => {
      let param = `api-key=${public_const.apiKey}&page-size=15`;
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
            navigate("/search-results");
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

  return (
    <header>
      <div className="toolbar">
        <Logo />
        <SearchBox onSubmit={onSearch} />
      </div>
    </header>
  );
};

export default Header;
