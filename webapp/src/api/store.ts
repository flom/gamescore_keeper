import { type Group, GroupSchema } from "@/types/Group";
import { PlayerSchema } from "@/types/Player";
import { GameSchema } from "@/types/Game";
import { GameRecordSchema } from "@/types/GameRecord";
import { GameScoreSchema } from "@/types/GameScore";

const playerId1 = "1EBEC6E6-554A-4D8F-9EF7-E0D08BA6B8B3";
const playerId2 = "7D4210A2-10AA-40AC-81C9-39E1B348D931";
const playerId3 = "93F89AE0-6B7D-406A-8FC6-832A165DC273";

const gameId1 = "1D938E84-86C1-4E3D-A738-DD30841CD20E";
const gameId2 = "4A928652-8809-4227-976F-805F9119BF71";
const gameId3 = "F4E75FB1-93B4-4AC3-B677-36BC35B0A362";

const gameRecordId1 = "677853A2-3017-4E43-8896-499D34E54060";
const gameRecordId2 = "BA4A0339-CDDB-4730-9FAE-886E32CDD708";
const gameRecordId3 = "846F6483-3EA2-43A1-BD1F-CFEDF6009B82";

const initialGroups: Group[] = [
  GroupSchema.parse({
    id: "AC606E1E-C405-4937-8F8C-A00323F6D723",
    players: [
      PlayerSchema.parse({
        id: playerId1,
        name: "Foo",
        initials: "F",
        color: "#00FF00",
      }),
      PlayerSchema.parse({
        id: playerId2,
        name: "Bar",
        initials: "B",
        color: "#FF0000",
      }),
      PlayerSchema.parse({
        id: playerId3,
        name: "Zoo",
        initials: "Z",
        color: "#0000FF",
      }),
    ],
    games: [
      GameSchema.parse({ id: gameId1, name: "Quixx" }),
      GameSchema.parse({ id: gameId2, name: "Noch Mal!" }),
      GameSchema.parse({ id: gameId3, name: "Skyjo" }),
    ],
    records: [
      GameRecordSchema.parse({
        id: gameRecordId1,
        gameId: gameId1,
        scores: [
          GameScoreSchema.parse({ playerId: playerId1, score: 12 }),
          GameScoreSchema.parse({ playerId: playerId2, score: 2 }),
          GameScoreSchema.parse({ playerId: playerId3, score: 3 }),
        ],
      }),
      GameRecordSchema.parse({
        id: gameRecordId2,
        gameId: gameId2,
        scores: [
          GameScoreSchema.parse({ playerId: playerId1, score: 3 }),
          GameScoreSchema.parse({ playerId: playerId2, score: 123 }),
          GameScoreSchema.parse({ playerId: playerId3, score: 1 }),
        ],
      }),
      GameRecordSchema.parse({
        id: gameRecordId3,
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
