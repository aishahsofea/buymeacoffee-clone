import { gql, useQuery } from "@apollo/client";
import React from "react";

import { FeaturedCreators } from "../components";
import { FeaturedCreator } from "../data/featuredCreators";
import { getFeaturedCreators } from "../lib/featuredCreators";

const AllCreatorsQuery = gql`
  query {
    creators {
      id
      name
      profilePicture
      projectSlug
      profileWork
    }
  }
`;

interface ExploreCreatorsProps {
  featuredCreatorsData: FeaturedCreator[];
}

const ExploreCreators = ({ featuredCreatorsData }: ExploreCreatorsProps) => {
  const { data, loading, error } = useQuery(AllCreatorsQuery);

  console.log({ data, loading, error });
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

export default ExploreCreators;
