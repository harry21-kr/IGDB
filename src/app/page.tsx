import { getKeyword, getTheme } from "@/api/IGDB";
import KeywordList from "@/components/Keyword/KeywordList";
import ThemeList from "@/components/Theme/ThemeList";

const Home = async () => {
  const themeList = await getTheme();

  const keywordList = await getKeyword();
  console.log(keywordList);

  return (
    <div>
      <ThemeList themeList={themeList} />
      <KeywordList keywordList={keywordList} />
    </div>
  );
};
export default Home;
