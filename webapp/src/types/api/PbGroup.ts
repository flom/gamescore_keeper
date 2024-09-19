import type { RecordModel } from "pocketbase";
import type PbPlayer from "@/types/api/PbPlayer";

type PbGroup = {
  name: string;
  expand?: {
    players_via_groupId?: PbPlayer[];
  };
} & RecordModel;

export default PbGroup;
