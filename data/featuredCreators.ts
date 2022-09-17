export interface Creator {
  name: string;
  profile_picture: string;
  project_slug: string;
  profile_work: string;
  public_supporters_count: number;
  show_supporter_count: boolean;
}

export interface FeaturedCreator {
  tab_id: string;
  tab_name: string;
  creators: Creator[];
}

export const featuredCreators: FeaturedCreator[] = [
  {
    tab_id: "video-creators",
    tab_name: "Video creators",
    creators: [
      {
        name: "PriorAttire",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2020/11/348df2c9ac273b642918f634ac2d2086.jpg@300w_0e.jpg",
        project_slug: "priorattire",
        profile_work:
          "creating YouTube videos on historical fashions, dressmaking etc.",
        public_supporters_count: 366,
        show_supporter_count: true,
      },
      {
        name: "HandyMumLin",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2021/10/ac7015e6f13636e13fb1db44bd92d1a8.jpg@300w_0e.jpg",
        project_slug: "koolinlin",
        profile_work: "Sewing video maker",
        public_supporters_count: 450,
        show_supporter_count: true,
      },
      {
        name: "Kevin Wilson",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2020/12/d1dcf12336309e1a95607d2911bbe003.jpg@300w_0e.jpg",
        project_slug: "ccchristian",
        profile_work: "telling stories over a cup of chai ",
        public_supporters_count: 1006,
        show_supporter_count: true,
      },
      {
        name: "Feli from Germany",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2020/07/52065af5108f9ee380564a58d713ea9c.jpg@300w_0e.jpg",
        project_slug: "felifromgermany",
        profile_work: "creating YouTube videos",
        public_supporters_count: 550,
        show_supporter_count: true,
      },
    ],
  },
  {
    tab_id: "artists",
    tab_name: "Artists",
    creators: [
      {
        name: "AdamBoreland",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2021/10/a64853bf2effa4f76d5255b48ca93609.jpeg@300w_0e.jpg",
        project_slug: "AdamBoreland",
        profile_work: "Loving through Dance",
        public_supporters_count: 577,
        show_supporter_count: true,
      },
      {
        name: "MaremiSmallArt",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2021/03/c1dbcaa3bf4d76fbb090756e67642fcd.jpg@300w_0e.jpg",
        project_slug: "maremismallart",
        profile_work: "",
        public_supporters_count: 1689,
        show_supporter_count: true,
      },
      {
        name: "Pet Artist Mary Carnot",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2021/04/c6e5b3cdfc172304e71332471c857bde.jpeg@300w_0e.jpg",
        project_slug: "marycarnot",
        profile_work: "Pet Artist",
        public_supporters_count: 139,
        show_supporter_count: true,
      },
      {
        name: "Hamilton Glass",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2021/01/495a7acb9f9b123ff8692feed03b6eed.jpg@300w_0e.jpg",
        project_slug: "HamGlass",
        profile_work: "painting to raise funds for community organizations",
        public_supporters_count: 524,
        show_supporter_count: true,
      },
    ],
  },
  {
    tab_id: "writers",
    tab_name: "Writers",
    creators: [
      {
        name: "L'Oreal Thompson Payton",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2021/01/5efd931aeb438f972916d89aea91d4f1.jpg@300w_0e.jpg",
        project_slug: "ltinthecity",
        profile_work:
          "writing motivational newsletters to get you through the midweek slump",
        public_supporters_count: 162,
        show_supporter_count: true,
      },
      {
        name: "Sharleen Joynt",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2020/10/4353c5ff434fdf121bc8c7653bc10ea2.jpg@300w_0e.jpg",
        project_slug: "sharleen",
        profile_work:
          "making sure you always have something to read about The Bachelor",
        public_supporters_count: 2806,
        show_supporter_count: true,
      },
      {
        name: "Somewhere: For Us",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2020/10/5aa39b9e54efd9125b7de0cfba3b4d4d.png@300w_0e.jpg",
        project_slug: "SomewhereForUs",
        profile_work:
          "a brand new LGBTQ+ magazine and funding scheme for Scotland and beyond",
        public_supporters_count: 403,
        show_supporter_count: true,
      },
      {
        name: "Rebekah Borucki",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2021/09/02c2d752e1526c8be4372ec32d3c0e49.jpg@300w_0e.jpg",
        project_slug: "bexlife",
        profile_work:
          "building better ways to publish and amplify voices that matter.",
        public_supporters_count: 585,
        show_supporter_count: true,
      },
    ],
  },
  {
    tab_id: "musicians",
    tab_name: "Musicians",
    creators: [
      {
        name: "Mike Barnes Drums",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2019/04/abf02d8c433f9b9b36272b48e66ceba8.jpg@300w_0e.jpg",
        project_slug: "mikebarnesdrums",
        profile_work:
          "creating drum tuition videos on YouTube and other platforms",
        public_supporters_count: 665,
        show_supporter_count: true,
      },
      {
        name: "johnnathancordy",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2020/05/9fcd8d2b32ac48444bd6a682c5a67ebb.jpg@300w_0e.jpg",
        project_slug: "johnnathancordy",
        profile_work: "creating guitar music and hopefully useful lessons?",
        public_supporters_count: 1520,
        show_supporter_count: true,
      },
      {
        name: "NicknLex",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2021/02/4e03a8ed95a45a0019f5233a599e5439.png@300w_0e.jpg",
        project_slug: "NicknLex",
        profile_work: "reacting to new music everyday",
        public_supporters_count: 260,
        show_supporter_count: true,
      },
      {
        name: "Ross Farley",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2021/03/b1f5e9f78a48d0bdd36efd89d33de61e.jpeg@300w_0e.jpg",
        project_slug: "rossfarley",
        profile_work: "making drum transcriptions and lessons",
        public_supporters_count: 497,
        show_supporter_count: true,
      },
    ],
  },
  {
    tab_id: "developers",
    tab_name: "Developers",
    creators: [
      {
        name: "Stephanie Eckles (5t3ph)",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2020/11/500b9f3362e0118cbb93024190207942.jpg@300w_0e.jpg",
        project_slug: "moderncss",
        profile_work: "the author of ModernCSS.dev, StyleStage.dev, 11ty.Rocks",
        public_supporters_count: 99,
        show_supporter_count: true,
      },
      {
        name: "Luke Tsekouras",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2020/04/c8c1818ace00d219ffabb502488751a1.jpg@300w_0e.jpg",
        project_slug: "lukegt",
        profile_work: "enabling fun with friends",
        public_supporters_count: 519,
        show_supporter_count: true,
      },
      {
        name: "TooLiPHoNe.NeT",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2019/10/e89f37b98084a15966bec5db2319967f.png@300w_0e.jpg",
        project_slug: "tooliphone",
        profile_work: "customizing iOS without jailbreak 😎",
        public_supporters_count: 3060,
        show_supporter_count: true,
      },
      {
        name: "CodeBeauty",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2021/07/c57d1a414cf8382e84d92cc12e328c14.png@300w_0e.jpg",
        project_slug: "codebeauty",
        profile_work:
          "a Software Engineer who teaches you how to write beautiful code! 💻&zwj;✨",
        public_supporters_count: 234,
        show_supporter_count: true,
      },
    ],
  },
  {
    tab_id: "gaming",
    tab_name: "Gaming",
    creators: [
      {
        name: "LogicalGeekBoy",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2021/08/203f7b05f58281d74c2d1c3bbdf556e7.png@300w_0e.jpg",
        project_slug: "logicalgeekboy",
        profile_work: "making Minecraft content",
        public_supporters_count: 169,
        show_supporter_count: true,
      },
      {
        name: "AttackOnQuest",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/default/79D6B5/AO.png",
        project_slug: "AoQ",
        profile_work: "a fan-made free to play game for the Oculus Quest",
        public_supporters_count: 615,
        show_supporter_count: true,
      },
      {
        name: "The Grapevine",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2021/06/3380c03206000e044d2eba714b862710.jpg@300w_0e.jpg",
        project_slug: "grapevine",
        profile_work:
          "providing a forum for all of West London Premier League Fans",
        public_supporters_count: 280,
        show_supporter_count: true,
      },
      {
        name: "Trials Report",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2020/03/ad51e2567ce386ee073fb18f11591285.png@300w_0e.jpg",
        project_slug: "trialsreport",
        profile_work: "building awesome websites for Destiny and PUBG",
        public_supporters_count: 2107,
        show_supporter_count: true,
      },
    ],
  },
  {
    tab_id: "podcasters",
    tab_name: "Podcasters",
    creators: [
      {
        name: "Nightmare on Film Street",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2020/10/c07dde95e8e9264a3b3e4423f9fa28b1.jpg@300w_0e.jpg",
        project_slug: "nofspodcast",
        profile_work:
          "creating horror movie podcasts, editorials, reviews, and more!",
        public_supporters_count: 230,
        show_supporter_count: true,
      },
      {
        name: "Japan By River Cruise",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2021/01/db6092827c76c116dfc3699b7aaeda94.png@300w_0e.jpg",
        project_slug: "japanbyrivercruise",
        profile_work:
          "a weekly round up of the Japanese river cruise industry, by podcast.",
        public_supporters_count: 119,
        show_supporter_count: true,
      },
      {
        name: "Boring Books for Bedtime Podcast",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2021/10/67f31e0864cbe5686d330fce51d2aedf.png@300w_0e.jpg",
        project_slug: "d5kcMsW",
        profile_work:
          "a sleep podcast that helps you overcomes stress, anxiety and insomnia",
        public_supporters_count: 272,
        show_supporter_count: true,
      },
      {
        name: "Shane Whaley",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2020/05/afbbbd8d60495bdec56bb34a582b11fc.jpg@300w_0e.jpg",
        project_slug: "tourpreneur",
        profile_work:
          "The Curator of The Daily Brief and Host of the Tourpreneur Podcast.",
        public_supporters_count: 108,
        show_supporter_count: true,
      },
    ],
  },
  {
    tab_id: "community",
    tab_name: "Community",
    creators: [
      {
        name: "iic_official",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2021/09/e6e0576b382a634ec565a912630856ff.png@300w_0e.jpg",
        project_slug: "iicofficial",
        profile_work: "Interior Community",
        public_supporters_count: 121,
        show_supporter_count: true,
      },
      {
        name: "The AntiRacist Table",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2020/07/0ae66445e9c19709a9f008d80a595f30.png@300w_0e.jpg",
        project_slug: "antiracisttable",
        profile_work:
          "a creator of AntiRacist resources and community for all! ",
        public_supporters_count: 987,
        show_supporter_count: true,
      },
      {
        name: "AlwaysBeBirdinPodcast",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2021/01/6c7e6522ea1fca5dde612b64fc30af5c.jpg@300w_0e.jpg",
        project_slug: "AlwaysBeBirdin",
        profile_work: "Creating community and uplifting BIPOC birders.",
        public_supporters_count: 131,
        show_supporter_count: true,
      },
      {
        name: "wearewildness",
        profile_picture:
          "https://cdn.buymeacoffee.com/uploads/profile_pictures/2021/03/918dc13f5113bc239b1e61414db59177.jpg@300w_0e.jpg",
        project_slug: "wearewildness",
        profile_work:
          "creating art, challenges, and community to inspire Nature connection.",
        public_supporters_count: 289,
        show_supporter_count: true,
      },
    ],
  },
];
