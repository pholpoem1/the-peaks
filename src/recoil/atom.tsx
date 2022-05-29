import { atom } from "recoil";
import { INews } from "./interfaces";

const newsListState = atom({
  key: "newsListState",
  default: [],
});

const sportListState = atom({
  key: "sportListState",
  default: [],
});

const textState = atom({
  key: "textState",
  default: "",
});

const orderByState = atom({
  key: "orderByState",
  default: "newest",
});

const loaderState = atom({
  key: "loaderState",
  default: false,
});

const bookmarkState = atom({
  key: "bookmarkState",
  default: true,
});

const contentState = atom({
  key: "contentState",
  default: {} as INews,
});

export {
  newsListState,
  textState,
  orderByState,
  loaderState,
  sportListState,
  bookmarkState,
  contentState,
};
