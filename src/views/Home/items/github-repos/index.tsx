import React, { CSSProperties } from "react";
import SlickCarousel from "components/Slick";
import AppLoader from "components/AppLoader";
import GithubRepository from "layouts/MobileMenu/Repository";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import Slider from "components/Slider";
import Box from "components/Box";
import Countup from "components/CountUp";
import Flex from "components/Flex";
import useElementInView from "hooks/useElementInView";
import { useStore } from "store/store";
import { Repository } from "interfaces";

interface GithubReposProps {
  showHeader?: boolean;
  containerStyles?: CSSProperties;
}

const GithubRepos: React.FC<GithubReposProps> = ({
  showHeader = true,
  containerStyles,
}) => {
  const { store } = useStore();
  const { isLoading, repositories } = store.github;
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: "550px" });
  const [ref, inView] = useElementInView({ threshold: 0 });

  return (
    <section style={containerStyles} className="github-repos">
      {showHeader && (
        <>
          <Flex justifyContent="center" alignItems="center" gap="1rem">
            <h2 style={{ padding: "0.5rem 0" }}>{t("git.repos")}</h2>
            {inView ? (
              <Countup
                end={repositories.length > 99 ? 99 : repositories.length}
                prefix={repositories.length > 99 ? "+" : ""}
              />
            ) : null}
          </Flex>
          <h3 ref={ref} style={{ padding: "1rem 0" }}>
            {t("git.message")}
          </h3>
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
            repositories?.map((repo: Repository) => {
              return (
                <Box key={repo?.id} height="12rem" margin="0.1rem 0.5rem">
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
            repositories?.map((repo: Repository) => {
              return <GithubRepository repo={repo} key={repo?.id} />;
            })}
        </Slider>
      )}
    </section>
  );
};

export default GithubRepos;
