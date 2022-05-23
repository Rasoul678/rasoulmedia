import React from "react";
import SwiperCarousel from "components/Swiper";
import { useTypedSelector } from "hooks/useTypedSelector";
import AppLoader from "components/AppLoader";
import GithubRepository from "layouts/MobileMenu/Repository";

interface GithubReposProps {}

const GithubRepos: React.FC<GithubReposProps> = () => {
  const { isLoading, repositories } = useTypedSelector((state) => state.github);

  return (
    <div style={{ width: "85%", margin: "auto" }} className="github-repos">
      <h2 style={{ padding: "1rem" }}>Github Repositories</h2>
      <SwiperCarousel
        style={{ height: "12rem", backgroundColor: "transparent" }}
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
    </div>
  );
};

export default GithubRepos;
