import { Fragment } from "react";
import ExternalLinkIcon from "components/Icons/ExternalLinkIcon";
import EyeIcon from "components/Icons/EyeIcon";
import GitForkIcon from "components/Icons/GitForkIcon";
import StarIcon from "components/Icons/StarIcon";
import * as Styled from "./MobileMenu.styles";

interface GithubRepositoryProps {}

const GithubRepository: React.FC<GithubRepositoryProps> = (props) => {
  return (
    <Styled.MenuSlider>
      <Styled.RepoHeaderWrapper>
        <div className="repo-slide-header">{'name'}</div>
        <ExternalLinkIcon className="repo-external-link" size={27} />
      </Styled.RepoHeaderWrapper>
      <Styled.RepoCountsContainer>
        <Styled.CountWrapper>
          <StarIcon size={20} />
          <Styled.Count>{"7"}</Styled.Count>
        </Styled.CountWrapper>
        <Styled.CountWrapper>
          <GitForkIcon size={30} />
          <Styled.Count>{"2"}</Styled.Count>
        </Styled.CountWrapper>
        <Styled.CountWrapper>
          <EyeIcon size={25} />
          <Styled.Count>{"6"}</Styled.Count>
        </Styled.CountWrapper>
      </Styled.RepoCountsContainer>
      <Styled.RepoLanguagesContainer>
        {[1, 2, 3].map((lang, index) => (
          <Fragment key={index}>{"lang"}</Fragment>
        ))}
      </Styled.RepoLanguagesContainer>
    </Styled.MenuSlider>
  );
};

export default GithubRepository;
