import edit from "assets/icon-pack/icons8-edit-420.svg";
import home from "assets/icon-pack/icons8-fido-420.svg";
import gmail from "assets/icon-pack/icons8-gmail-420.svg";
import ideas from "assets/icon-pack/icons8-idea-420.svg";
import plus from "assets/icon-pack/icons8-plus-420.svg";
import fingerprint from "assets/icon-pack/icons8-touch-id-420.svg";
import remove from "assets/icon-pack/icons8-trash-can-420.svg";
import uncheckAll from "assets/icon-pack/icons8-uncheck-all-420.svg";
import menu from "assets/icon-pack/icons8-menu-420.svg";
import logout from "assets/icon-pack/icons8-out-420.svg";
import lang from "assets/icon-pack/icons8-google-translate-new-420.svg";
import chatGPT from "assets/icon-pack/icons8-chatgpt-420.svg";
import ok from "assets/icon-pack/icons8-ok-420.svg";
import GeneralIcon from "./GeneralIcon";
import { socials } from "./socials";
import { stacks } from "./stacks";
import { IconType } from "interfaces";

export const iconsList = {
  socials: {
    ...socials,
  },
  stacks: {
    ...stacks,
  },
  home: (props?: IconType) => <GeneralIcon src={home} {...props} />,
  ideas: (props?: IconType) => <GeneralIcon src={ideas} {...props} />,
  gmail: (props?: IconType) => <GeneralIcon src={gmail} {...props} />,
  add: (props?: IconType) => <GeneralIcon src={plus} {...props} />,
  edit: (props?: IconType) => <GeneralIcon src={edit} {...props} />,
  delete: (props?: IconType) => <GeneralIcon src={remove} {...props} />,
  id: (props?: IconType) => <GeneralIcon src={fingerprint} {...props} />,
  uncheckAll: (props?: IconType) => <GeneralIcon src={uncheckAll} {...props} />,
  menu: (props?: IconType) => <GeneralIcon src={menu} {...props} />,
  logout: (props?: IconType) => <GeneralIcon src={logout} {...props} />,
  lang: (props?: IconType) => <GeneralIcon src={lang} {...props} />,
  chatGPT: (props?: IconType) => <GeneralIcon src={chatGPT} {...props} />,
  ok: (props?: IconType) => <GeneralIcon src={ok} {...props} />,
};
