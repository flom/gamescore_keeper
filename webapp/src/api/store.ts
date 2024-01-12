import { type Group, GroupSchema } from "@/models/Group";
import { PlayerSchema } from "@/models/Player";
import { GameSchema } from "@/models/Game";

const initialGroups: Group[] = [
  GroupSchema.parse({
    id: "AC606E1E-C405-4937-8F8C-A00323F6D723",
    players: [
      PlayerSchema.parse({ name: "Foo", initials: "F" }),
      PlayerSchema.parse({ name: "Bar", initials: "B" }),
      PlayerSchema.parse({ name: "Zoo", initials: "Z" }),
    ],
  }),
  GroupSchema.parse({
    id: "E95013D3-5360-4815-895B-5806F7DABF0B",
    players: [
      PlayerSchema.parse({ name: "Alpha", initials: "A" }),
      PlayerSchema.parse({ name: "Beta", initials: "B" }),
      PlayerSchema.parse({ name: "Gamma", initials: "G" }),
      PlayerSchema.parse({ name: "Delta", initials: "D" }),
    ],
    games: [
      GameSchema.parse({ name: "Quixx" }),
      GameSchema.parse({ name: "Noch Mal!" }),
      GameSchema.parse({ name: "Skyjo" }),
    ],
  }),
];

const store = {
  groups: initialGroups,
};

export default store;
