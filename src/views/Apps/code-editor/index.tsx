import MainLayout from "layouts/Main";
import React, { lazy } from "react";
import * as Styled from "./CodeEditor.styles";

const Editor = lazy(
  () => import(/*webpackChunkName: "Code_Editor_Remote"*/ "editor/app")
);

interface IProps {}

const CodeEditor: React.FC<IProps> = (props) => {
  return (
    <MainLayout>
      <Styled.Wrapper>
        <Styled.Header>Online Code Editor</Styled.Header>
        <Editor />
      </Styled.Wrapper>
    </MainLayout>
  );
};

export default CodeEditor;
