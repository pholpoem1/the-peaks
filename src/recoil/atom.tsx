import { atom } from "recoil";

const newsListState = atom({
  key: "newsListState",
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

export { newsListState, textState, orderByState, loaderState };
