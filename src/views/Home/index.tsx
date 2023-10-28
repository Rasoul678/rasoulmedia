import Footer from "components/Footer";
import { View } from "components/Global/GlobalStyles";
import * as Styled from "./Home.styles";

import MobileIcon from "components/Icons/MobileIcon";
import TabletIcon from "components/Icons/TabletIcon";
import LapTopIcon from "components/Icons/LapTopIcon";
import Box from "components/Box";
import ReactTour from "components/Tour";
import HomeHero from "components/Hero";
import TimeLine from "components/timeline/TimeLine";
import { useStore } from "store/store";
import { RepoType } from "interfaces";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const { store } = useStore();
  const { isLoading, repositories } = store.github;

  const myRepos = ([...repositories] as RepoType[])
    ?.sort(
      (a, b) => Number(new Date(b.created_at)) - Number(new Date(a.created_at))
    )
    .filter((repo) => {
      return !repo.fork && repo.stargazers_count;
    })
    .slice(0, 20);

  return (
    <View>
      <ReactTour name="home" />
      <HomeHero />
      {!isLoading && (
        <Box width="90%" margin="auto">
          <TimeLine repos={myRepos} />
        </Box>
      )}
      <Styled.DevicesWrapper>
        <MobileIcon size={30} />
        <TabletIcon size={30} />
        <LapTopIcon size={35} />
      </Styled.DevicesWrapper>
      <Footer />
    </View>
  );
};

export default Home;
