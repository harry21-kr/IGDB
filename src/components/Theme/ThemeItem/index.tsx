import { Theme } from "@/api/IGDB";
import { Button } from "@/components/ui/button";

interface ThemeItemProps {
  theme: Theme;
}

const ThemeItem = ({ theme }: ThemeItemProps) => {
  return <Button>{theme.name}</Button>;
};
export default ThemeItem;
