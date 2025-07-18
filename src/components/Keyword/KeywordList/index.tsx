import { Keyword } from "@/api/IGDB";
import KeywordItem from "../KeywordItem";

interface KeywordListProps {
  keywordList: Keyword[];
}

const KeywordList = ({ keywordList }: KeywordListProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Keyword</h1>
      <div className="flex flex-wrap justify-center gap-2">
        {keywordList.map((keyword) => (
          <KeywordItem key={keyword.id} keyword={keyword} />
        ))}
      </div>
    </div>
  );
};
export default KeywordList;
