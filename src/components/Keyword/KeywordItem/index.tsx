import { Keyword } from "@/api/IGDB";
import { Button } from "@/components/ui/button";

interface KeywordItemProps {
  keyword: Keyword;
}

const KeywordItem = ({ keyword }: KeywordItemProps) => {
  return <Button>{keyword.name}</Button>;
};
export default KeywordItem;
