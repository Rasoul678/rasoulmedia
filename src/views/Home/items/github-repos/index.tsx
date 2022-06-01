import React, { CSSProperties } from "react";
import SlickCarousel from "components/Slick";
import { useTypedSelector } from "hooks/useTypedSelector";
import AppLoader from "components/AppLoader";
import GithubRepository from "layouts/MobileMenu/Repository";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import Slider from "components/Slider";
import Box from "components/Box";

interface GithubReposProps {
  showHeader?: boolean;
  containerStyles?: CSSProperties;
}

const GithubRepos: React.FC<GithubReposProps> = ({
  showHeader = true,
  containerStyles,
}) => {
  const { isLoading, repositories } = useTypedSelector((state) => state.github);
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: "550px" });

  return (
    <section style={containerStyles} className="github-repos">
      {showHeader && (
        <>
          <h2 style={{ padding: "0.5rem 0" }}>{t("git.repos")}</h2>
          <h3 style={{ padding: "1rem 0" }}>{t("git.message")}</h3>
        </>
      )}
      {!isMobile ? (
        <SlickCarousel>
          {isLoading && (
            <div className="slider-loader-container ">
              <AppLoader />
            </div>
          )}
          {!isLoading &&
            repositories?.map((repo) => {
              return (
                <Box key={repo?.id} height='12rem' margin="0.1rem 0.5rem">
                  <GithubRepository repo={repo} />
                </Box>
              );
            })}
        </SlickCarousel>
      ) : (
        <Slider height="14rem">
          {isLoading && (
            <div className="slider-loader-container ">
              <AppLoader />
            </div>
          )}
          {!isLoading &&
            repositories?.map((repo) => {
              return <GithubRepository repo={repo} key={repo?.id} />;
            })}
        </Slider>
      )}
    </section>
  );
};

export default GithubRepos;
