import { type Group, GroupSchema } from "@/models/Group";
import { PlayerSchema } from "@/models/Player";

const initialGroups: Group[] = [
  GroupSchema.parse({
    players: [
      PlayerSchema.parse({ name: "Foo", initials: "F" }),
      PlayerSchema.parse({ name: "Bar", initials: "B" }),
      PlayerSchema.parse({ name: "Zoo", initials: "Z" }),
    ],
  }),
  GroupSchema.parse({
    players: [
      PlayerSchema.parse({ name: "Foo", initials: "F" }),
      PlayerSchema.parse({ name: "Bar", initials: "B" }),
      PlayerSchema.parse({ name: "Zoo", initials: "Z" }),
    ],
  }),
];

const store = {
  groups: initialGroups,
};

export default store;
