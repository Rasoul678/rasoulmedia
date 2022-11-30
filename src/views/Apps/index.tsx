import { View } from "components/Global/GlobalStyles";
import MainLayout from "layouts/Main";

import Remote from "remote/Remote";

const Apps: React.FC = () => {
  return (
    <View>
      <MainLayout>
        <h1>Apps</h1>
        <Remote isRemote />
      </MainLayout>
    </View>
  );
};

export default Apps;
