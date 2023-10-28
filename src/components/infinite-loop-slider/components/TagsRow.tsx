import React from "react";
import Tag from "./Tag";

type IProps = {
  tagPerRow: number;
  tagList?: string[];
  color?: string;
};

const TagsRow: React.FC<IProps> = (props) => {
  const { tagPerRow, tagList, color } = props;
  const tags = tagList?.slice(0, tagPerRow);

  return (
    <div className="tags-row">
      {tags?.map((tag, i) => {
        return <Tag key={i} text={tag} color={color} />;
      })}
    </div>
  );
};

export default TagsRow;
