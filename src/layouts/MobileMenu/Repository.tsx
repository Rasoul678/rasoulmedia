import { Repository } from "interfaces";
import { openNewTab } from "utils/helpers";
import { Fragment } from "react";
import * as Styled from "./MobileMenu.styles";
import ExternalLinkIcon from "components/Icons/ExternalLinkIcon";
import StarIcon from "components/Icons/StarIcon";
import GitForkIcon from "components/Icons/GitForkIcon";
// import OpenIssueIcon from "components/Icons/OpenIssueIcon";
import EyeIcon from "components/Icons/EyeIcon";
import TypescriptIcon from "components/Icons/TypescriptIcon";
import CSS3Icon from "components/Icons/CSS3Icon";
import PHPIcon from "components/Icons/PHPIcon";
import JavascriptIcon from "components/Icons/JavascriptIcon";
import HTML5Icon from "components/Icons/HTML5Icon";
import DockerIcon from "components/Icons/DockerIcon";
import VueJsIcon from "components/Icons/VueJsIcon";

interface GithubRepositoryProps {
  repo: Repository;
}

const GithubRepository: React.FC<GithubRepositoryProps> = (props) => {
  const {
    repo: {
      url,
      name,
      stargazers: { totalCount: starsCount },
      forks: { totalCount: forksCount },
      // issues: { totalCount: issuesCount },
      watchers: { totalCount: watchersCount },
      languages: { nodes: langs },
    },
  } = props;

  const getLangIcon = (lang: { name: string; color: string }) => {
    const { name, color } = lang;

    switch (name) {
      case "CSS":
        return <CSS3Icon size={40} color={color} />;

      case "PHP":
        return <PHPIcon size={40} color={color} />;

      case "JavaScript":
        return <JavascriptIcon size={40} color={color} />;

      case "HTML":
        return <HTML5Icon size={40} color={color} />;

      case "Dockerfile":
        return <DockerIcon size={40} color={color} />;

      case "TypeScript":
        return <TypescriptIcon size={40} color={color} />;

      case "Vue":
        return <VueJsIcon size={40} color={color} />;

      default:
        return null;
    }
  };

  return (
    <Styled.MenuSlider>
      <Styled.RepoHeaderWrapper onClick={() => openNewTab(url)}>
        <div className="repo-slide-header">{name}</div>
        <ExternalLinkIcon className="repo-external-link" size={27} />
      </Styled.RepoHeaderWrapper>
      <Styled.RepoCountsContainer>
        <Styled.CountWrapper>
          <StarIcon size={20} />
          <Styled.Count>{starsCount}</Styled.Count>
        </Styled.CountWrapper>
        <Styled.CountWrapper>
          <GitForkIcon size={30} />
          <Styled.Count>{forksCount}</Styled.Count>
        </Styled.CountWrapper>
        {/* <Styled.CountWrapper>
          <OpenIssueIcon size={25} />
          {issuesCount}
        </Styled.CountWrapper> */}
        <Styled.CountWrapper>
          <EyeIcon size={25} />
          <Styled.Count>{watchersCount}</Styled.Count>
        </Styled.CountWrapper>
      </Styled.RepoCountsContainer>
      <Styled.RepoLanguagesContainer>
        {langs.map((lang, index) => (
          <Fragment key={index}>{getLangIcon(lang)}</Fragment>
        ))}
      </Styled.RepoLanguagesContainer>
    </Styled.MenuSlider>
  );
};

export default GithubRepository;
