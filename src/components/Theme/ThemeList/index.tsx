import { Theme } from "@/api/IGDB";
import ThemeItem from "../ThemeItem";

interface ThemeListProps {
  themeList: Theme[];
}

const ThemeList = ({ themeList }: ThemeListProps) => {
  return (
    <div>
      {themeList.map((theme) => (
        <ThemeItem key={theme.id} theme={theme} />
      ))}
    </div>
  );
};
export default ThemeList;
