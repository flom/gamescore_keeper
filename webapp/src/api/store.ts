/* eslint-disable @typescript-eslint/no-magic-numbers */
import { type Group, GroupSchema } from "@/models/Group";
import { PlayerSchema } from "@/models/Player";
import { GameSchema } from "@/models/Game";
import { v4 } from "uuid";
import { GameRecordSchema } from "@/models/GameRecord";
import { GameScoreSchema } from "@/models/GameScore";

const playerId1 = v4();
const playerId2 = v4();
const playerId3 = v4();

const gameId1 = v4();
const gameId2 = v4();
const gameId3 = v4();

const initialGroups: Group[] = [
  GroupSchema.parse({
    id: "AC606E1E-C405-4937-8F8C-A00323F6D723",
    players: [
      PlayerSchema.parse({ id: playerId1, name: "Foo", initials: "F" }),
      PlayerSchema.parse({ id: playerId2, name: "Bar", initials: "B" }),
      PlayerSchema.parse({ id: playerId3, name: "Zoo", initials: "Z" }),
    ],
    games: [
      GameSchema.parse({ id: gameId1, name: "Quixx" }),
      GameSchema.parse({ id: gameId2, name: "Noch Mal!" }),
      GameSchema.parse({ id: gameId3, name: "Skyjo" }),
    ],
    records: [
      GameRecordSchema.parse({
        gameId: gameId1,
        scores: [
          GameScoreSchema.parse({ playerId: playerId1, score: 1 }),
          GameScoreSchema.parse({ playerId: playerId2, score: 2 }),
          GameScoreSchema.parse({ playerId: playerId3, score: 3 }),
        ],
      }),
      GameRecordSchema.parse({
        gameId: gameId2,
        scores: [
          GameScoreSchema.parse({ playerId: playerId1, score: 3 }),
          GameScoreSchema.parse({ playerId: playerId2, score: 2 }),
          GameScoreSchema.parse({ playerId: playerId3, score: 1 }),
        ],
      }),
      GameRecordSchema.parse({
        gameId: gameId3,
        scores: [
          GameScoreSchema.parse({ playerId: playerId1, score: 3 }),
          GameScoreSchema.parse({ playerId: playerId2, score: 1 }),
          GameScoreSchema.parse({ playerId: playerId3, score: 2 }),
        ],
      }),
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
  }),
];

const store = {
  groups: initialGroups,
};

export default store;
