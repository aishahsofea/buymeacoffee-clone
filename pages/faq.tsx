import { ReactElement } from "react";

import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";

const FAQ: NextPageWithLayout = () => {
  return (
    <div className="flex items-center justify-center content-center h-screen">
      <h1>FAQ pages</h1>
    </div>
  );
};

FAQ.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default FAQ;
