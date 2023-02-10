import { Suspense, lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Home />
    </Suspense>
  );
};

export default App;
