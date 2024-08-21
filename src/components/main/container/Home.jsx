import React from "react";
import { Footer, About } from ".";
import JobPage from "./Job";
import Portfolio from "./portofolia/index"
import History from "./task/Task";

const Home = () => {
  return (
    <>
      <About />
      <JobPage />
      <Portfolio />
      {/* <History/> */}
      <Footer />
    </>
  );
};

export default Home;
