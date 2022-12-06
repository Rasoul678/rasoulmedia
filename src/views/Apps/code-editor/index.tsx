import useTheme from "hooks/useTheme";
import React, { lazy } from "react";
import * as Styled from "./CodeEditor.styles";

const Editor = lazy(
  () => import(/*webpackChunkName: "Code_Editor_Remote"*/ "editor/app")
);

interface IProps {}

const CodeEditor: React.FC<IProps> = (props) => {
  const { text } = useTheme();

  return (
    <Styled.Wrapper>
      <Styled.Header style={{ color: text }}>
        Online Code Editor
      </Styled.Header>
      <Editor />
    </Styled.Wrapper>
  );
};

export default CodeEditor;
