import GeneralIcon from "./GeneralIcon";
import discord from "assets/icon-pack/icons8-discord-420.svg";
import github from "assets/icon-pack/icons8-github-420.svg";
import linkedin from "assets/icon-pack/icons8-linkedin-circled-420.svg";
import medium from "assets/icon-pack/icons8-medium-420.svg";
import reddit from "assets/icon-pack/icons8-reddit-420.svg";
import stack from "assets/icon-pack/icons8-stack-overflow-500.svg";
import twitter from "assets/icon-pack/icons8-twitter-circled-420.svg";
import { IconType } from "interfaces";

export const socials = {
  discord: (props?: IconType) => (
    <GeneralIcon
      src={discord}
      alt="discord"
      className="cursor-pointer"
      width={50}
      {...props}
    />
  ),
  github: (props?: IconType) => (
    <GeneralIcon
      src={github}
      alt="github"
      className="cursor-pointer"
      width={50}
      {...props}
    />
  ),
  linkedin: (props?: IconType) => (
    <GeneralIcon
      src={linkedin}
      alt="linkedin"
      className="cursor-pointer"
      width={50}
      {...props}
    />
  ),
  medium: (props?: IconType) => (
    <GeneralIcon
      src={medium}
      alt="medium"
      className="cursor-pointer"
      width={50}
      {...props}
    />
  ),
  reddit: (props?: IconType) => (
    <GeneralIcon
      src={reddit}
      alt="reddit"
      className="cursor-pointer"
      width={50}
      {...props}
    />
  ),
  stackOverflow: (props?: IconType) => (
    <GeneralIcon
      src={stack}
      alt="stack"
      className="cursor-pointer"
      width={50}
      {...props}
    />
  ),
  twitter: (props?: IconType) => (
    <GeneralIcon
      src={twitter}
      alt="twitter"
      className="cursor-pointer"
      width={50}
      {...props}
    />
  ),
};
