import type { RecordModel } from "pocketbase";
import type PbPlayer from "@/types/api/PbPlayer";
import type PbGame from "@/types/api/PbGame";
import type PbGameRecord from "@/types/api/PbGameRecord";

type PbGroup = {
  name: string;
  expand?: {
    players_via_groupId?: PbPlayer[];
    games_via_groupId?: PbGame[];
    gameRecords_via_groupId?: PbGameRecord[];
  };
} & RecordModel;

export default PbGroup;
