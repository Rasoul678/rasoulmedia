import React from "react";
import { ReactourStepContentArgs } from "reactour";
import NavigationButtons from "./NavigationButtons";
import Box from "components/Box";

interface ContentProps extends Pick<ReactourStepContentArgs, 'step' | 'goTo'> {
  content: string;
}

const Content: React.FC<ContentProps> = (props) => {
  const { content, ...rest } = props;
  return (
    <Box>
      <Box fontSize="1.2rem">{content}</Box>
      <NavigationButtons {...rest} />
    </Box>
  );
};

export default Content;
