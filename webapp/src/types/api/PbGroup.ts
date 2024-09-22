import type { RecordModel } from "pocketbase";
import type PbPlayer from "@/types/api/PbPlayer";
import type PbGame from "@/types/api/PbGame";
import type PbGameRecord from "@/types/api/PbGameRecord";

type PbGroup = {
  name: string;
  expand?: {
    players_via_group?: PbPlayer[];
    games_via_group?: PbGame[];
    gameRecords_via_group?: PbGameRecord[];
  };
} & RecordModel;

export default PbGroup;
