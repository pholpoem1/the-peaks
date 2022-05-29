import { selector } from "recoil";
import { bookmarkListState, contentState, newsListState } from "./atom";
import { INews } from "./interfaces";

const newsListSections = selector({
  key: "newsListSections",
  get: ({ get }) => {
    const news = get(newsListState);

    const sports: INews[] = news
      .filter((item: INews) => item.sectionId === "sport")
      .slice(0, 3);

    const cultures: INews[] = news
      .filter((item: INews) => item.sectionId === "culture")
      .slice(0, 3);

    const lifeandstyles: INews[] = news
      .filter((item: INews) => item.sectionId === "lifeandstyle")
      .slice(0, 3);

    return { sports, cultures, lifeandstyles };
  },
});

const findBookmarkList = selector({
  key: "findBookmarkList",
  get: ({ get }) => {
    const bookmark = get(bookmarkListState);
    const content = get(contentState);
    const find: INews | undefined = bookmark.find(
      (item) => item.id === content.id
    );

    return find;
  },
});

export { newsListSections, findBookmarkList };
