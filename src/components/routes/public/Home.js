import { PublicRoute } from "../../utils/routes";

const Home = () => {
  const Content = () => <>HOME</>;

  return <PublicRoute content={<Content />} />;
};

export default Home;
