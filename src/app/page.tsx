import { getTheme } from "@/api/IGDB";
import ThemeList from "@/components/Theme/ThemeList";

const Home = async () => {
  const themeList = await getTheme();

  return <ThemeList themeList={themeList} />;
};
export default Home;
