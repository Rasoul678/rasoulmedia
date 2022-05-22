import { openNewTab } from "utils/helpers";
import { Fragment, useEffect, useState } from "react";
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
  repo: any;
}

const GithubRepository: React.FC<GithubRepositoryProps> = (props) => {
  const [languages, setLanguages] = useState({});
  const {
    repo: {
      name,
      stargazers_count,
      forks_count,
      watchers_count,
      languages_url,
    },
  } = props;

  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;

    fetch(languages_url, { signal })
      .then((res) => res.json())
      .then((data) => setLanguages(data))
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  }, [languages_url]);

  const getLangIcon = (lang: string) => {
    switch (lang) {
      case "CSS":
        return <CSS3Icon size={40} color="#0066B6" />;

      case "PHP":
        return <PHPIcon size={40} color="#828BB4" />;

      case "JavaScript":
        return <JavascriptIcon size={40} color="#EAD41C" />;

      case "HTML":
        return <HTML5Icon size={40} color="#D84924" />;

      case "Dockerfile":
        return <DockerIcon size={40} color="#228EE1" />;

      case "TypeScript":
        return <TypescriptIcon size={40} color="#2F72BC" />;

      case "Vue":
        return <VueJsIcon size={40} color="#55AF7C" />;

      default:
        return null;
    }
  };

  return (
    <Styled.MenuSlider>
      <Styled.RepoHeaderWrapper onClick={() => openNewTab("url")}>
        <div className="repo-slide-header">{name}</div>
        <ExternalLinkIcon className="repo-external-link" size={30} />
      </Styled.RepoHeaderWrapper>
      <Styled.RepoCountsContainer>
        <Styled.CountWrapper>
          <StarIcon size={15} />
          <Styled.Count>{stargazers_count}</Styled.Count>
        </Styled.CountWrapper>
        <Styled.CountWrapper>
          <GitForkIcon size={35} />
          <Styled.Count>{forks_count}</Styled.Count>
        </Styled.CountWrapper>
        {/* <Styled.CountWrapper>
          <OpenIssueIcon size={25} />
          {issuesCount}
        </Styled.CountWrapper> */}
        <Styled.CountWrapper>
          <EyeIcon size={25} />
          <Styled.Count>{watchers_count}</Styled.Count>
        </Styled.CountWrapper>
      </Styled.RepoCountsContainer>
      <Styled.RepoLanguagesContainer>
        {Object.keys(languages)?.map((lang, index) => (
          <Fragment key={index}>{getLangIcon(lang)}</Fragment>
        ))}
      </Styled.RepoLanguagesContainer>
    </Styled.MenuSlider>
  );
};

export default GithubRepository;
