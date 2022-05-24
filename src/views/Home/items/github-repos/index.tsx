import React, { CSSProperties } from "react";
import SwiperCarousel from "components/Swiper";
import { useTypedSelector } from "hooks/useTypedSelector";
import AppLoader from "components/AppLoader";
import GithubRepository from "layouts/MobileMenu/Repository";
import { useTranslation } from "react-i18next";

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

  return (
    <section style={containerStyles} className="github-repos">
      {showHeader && (
        <>
          <h2 style={{ padding: "0.5rem 0" }}>{t("git.repos")}</h2>
          <h3 style={{ padding: "1rem 0" }}>{t("git.message")}</h3>
        </>
      )}
      <SwiperCarousel
        style={{
          height: "12rem",
          backgroundColor: "transparent",
          padding: "0.1rem 0",
        }}
      >
        {isLoading && (
          <div className="slider-loader-container ">
            <AppLoader />
          </div>
        )}
        {!isLoading &&
          repositories?.map((repo) => {
            return <GithubRepository repo={repo} key={repo?.id} />;
          })}
      </SwiperCarousel>
    </section>
  );
};

export default GithubRepos;
