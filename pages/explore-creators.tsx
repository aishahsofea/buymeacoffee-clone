import { ReactElement } from "react";

import { FeaturedCreators, Layout } from "../components";
import { FeaturedCreator } from "../data/featuredCreators";
import { getFeaturedCreators } from "../lib/featuredCreators";
import { NextPageWithLayout } from "./_app";

interface ExploreCreatorsProps {
  featuredCreatorsData: FeaturedCreator[];
}

const ExploreCreators: NextPageWithLayout<ExploreCreatorsProps> = ({
  featuredCreatorsData,
}) => {
  return (
    <div className="h-screen">
      {featuredCreatorsData.map((featured) => (
        <div
          key={featured.tab_id}
          className="p-4 w-947 mx-auto lg:w-11/12 xs:w-full"
        >
          <FeaturedCreators
            tabName={featured.tab_name}
            creators={featured.creators}
          />
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const featuredCreatorsData = getFeaturedCreators();
  return {
    props: {
      featuredCreatorsData,
    },
  };
}

ExploreCreators.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ExploreCreators;
