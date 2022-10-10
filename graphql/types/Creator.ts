import { enumType, extendType, objectType } from "nexus";

export const Creator = objectType({
  name: "Creator",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("name");
    t.nonNull.string("profilePicture");
    t.nonNull.string("projectSlug");
    t.nonNull.string("profileWork");
    t.nonNull.int("publicSupportersCount");
    t.nonNull.boolean("showSupporterCount");
    t.nonNull.dateTime("createdAt");
    t.nonNull.dateTime("updatedAt");
    t.nonNull.field("role", { type: Role });
  },
});

const Role = enumType({
  name: "Role",
  members: [
    "VIDEO_CREATOR",
    "ARTIST",
    "WRITER",
    "MUSICIAN",
    "DEVELOPER",
    "GAMER",
    "PODCASTER",
    "COMMUNITY",
  ],
});

export const CreatorQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("creators", {
      type: "Creator",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.creator.findMany();
      },
    });
  },
});
