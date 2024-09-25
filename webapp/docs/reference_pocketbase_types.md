# PocketBase Types

The types stored in `src/types/api` represent the data structures we send/receive to/from PocketBase.

For some types the custom created columns are extracted into `PbTypeFields`, for example:

```typescript
export type PbGroupFields = {
  name: string;
  users: string[];
  expand?: {
    players_via_group?: PbPlayer[];
    games_via_group?: PbGame[];
    gameRecords_via_group?: PbGameRecord[];
  };
};

type PbGroup = PbGroupFields & RecordModel;

export default PbGroup;
```

This is done because when creating a new group the client must send only the fields that correspond to the manually created columns in PocketBase.

Splitting this into its own type makes it easier in other function calls when typing the interfaces and creating new objects.