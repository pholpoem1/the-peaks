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

const bookmarkList = JSON.parse(localStorage.getItem("bookmarkList") || "[]");

const bookmarkListState = atom({
  key: "bookmarkListState",
  default: bookmarkList as INews[],
});

const showToastRemove = atom({
  key: "showToastRemove",
  default: false,
});

const showToastAdd = atom({
  key: "showToastAdd",
  default: false,
});

export {
  newsListState,
  textState,
  orderByState,
  loaderState,
  sportListState,
  bookmarkState,
  contentState,
  bookmarkListState,
  showToastRemove,
  showToastAdd,
};
