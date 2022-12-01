import { lazy, Suspense } from "react";
import { View } from "components/Global/GlobalStyles";
import MainLayout from "layouts/Main";
import ErrorBoundary from "components/ErrorBoundary";

const Remote = lazy(() => import("remote/Remote"));

const Apps: React.FC = () => {
  return (
    <View>
      <MainLayout>
        <h1>Apps</h1>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading from remote ...</div>}>
            <Remote isRemote />
          </Suspense>
        </ErrorBoundary>
      </MainLayout>
    </View>
  );
};

export default Apps;
