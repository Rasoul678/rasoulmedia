import css from "assets/icon-pack/icons8-css3-420.svg";
import docker from "assets/icon-pack/icons8-docker.svg";
import git from "assets/icon-pack/icons8-git-420.svg";
import html from "assets/icon-pack/icons8-html-5-420.svg";
import js from "assets/icon-pack/icons8-javascript-420.svg";
import npm from "assets/icon-pack/icons8-npm.svg";
import postman from "assets/icon-pack/icons8-postman-api-420.svg";
import react from "assets/icon-pack/icons8-react.svg";
import redux from "assets/icon-pack/icons8-redux.svg";
import ts from "assets/icon-pack/icons8-typescript.svg";
import webpack from "assets/icon-pack/icons8-webpack.svg";
import yarn from "assets/icon-pack/icons8-yarn-logo.svg";
import nextjs from "assets/svg/nextjs.svg";
import GeneralIcon from "./GeneralIcon";
import { IconType } from "interfaces";

export const stacks = {
  html: (props?: IconType) => <GeneralIcon src={html} {...props} />,
  css: (props?: IconType) => <GeneralIcon src={css} {...props} />,
  git: (props?: IconType) => <GeneralIcon src={git} {...props} />,
  javascript: (props?: IconType) => <GeneralIcon src={js} {...props} />,
  postman: (props?: IconType) => <GeneralIcon src={postman} {...props} />,
  react: (props?: IconType) => <GeneralIcon src={react} {...props} />,
  nextjs: (props?: IconType) => <GeneralIcon src={nextjs} {...props} />,
  ts: (props?: IconType) => <GeneralIcon src={ts} {...props} />,
  yarn: (props?: IconType) => <GeneralIcon src={yarn} {...props} />,
  docker: (props?: IconType) => <GeneralIcon src={docker} {...props} />,
  redux: (props?: IconType) => <GeneralIcon src={redux} {...props} />,
  npm: (props?: IconType) => <GeneralIcon src={npm} {...props} />,
  webpack: (props?: IconType) => <GeneralIcon src={webpack} {...props} />,
};
