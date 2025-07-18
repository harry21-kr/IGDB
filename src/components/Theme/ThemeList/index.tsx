import { Theme } from "@/api/IGDB";
import ThemeItem from "../ThemeItem";

interface ThemeListProps {
  themeList: Theme[];
}

const ThemeList = ({ themeList }: ThemeListProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Theme</h1>
      <div className="flex flex-wrap justify-center gap-2">
        {themeList.map((theme) => (
          <ThemeItem key={theme.id} theme={theme} />
        ))}
      </div>
    </div>
  );
};
export default ThemeList;
