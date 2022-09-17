import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Creator } from "../data/featuredCreators";

interface FeaturedCreatorsProps {
  tabName: string;
  creators: Creator[];
}

const FeaturedCreators = ({ tabName, creators }: FeaturedCreatorsProps) => {
  return (
    <>
      <h1>{tabName}</h1>
      <div className="flex justify-between overflow-auto whitespace-nowrap transparent-sc">
        {creators.map((creator) => (
          <Link key={creator.project_slug} href={`/${creator.project_slug}`}>
            <a className="w-1/4 min-w-200 mx-8 first:ml-0">
              <Image
                loader={() => creator.profile_picture}
                src={creator.profile_picture}
                alt="Picture of the creator"
                width={200}
                height={200}
              />
              <div className="text-xs whitespace-normal">
                {creator.name} is {creator.profile_work}
              </div>
              {creator.show_supporter_count && (
                <div>{creator.public_supporters_count} supporters</div>
              )}
            </a>
          </Link>
          // </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedCreators;
