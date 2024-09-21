import type { RecordModel } from "pocketbase";
import type PbPlayer from "@/types/api/PbPlayer";
import type PbGame from "@/types/api/PbGame";
import type PbGameRecord from "@/types/api/PbGameRecord";

type PbGroup = {
  name: string;
  expand?: {
    players?: PbPlayer[];
    games?: PbGame[];
    gameRecords?: PbGameRecord[];
  };
} & RecordModel;

export default PbGroup;
