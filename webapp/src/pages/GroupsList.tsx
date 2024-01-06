import type { ReactElement } from "react";
import Navbar from "../components/compositions/Navbar";
import Container from "../components/compositions/Container";
import groupHooks from "@/api/group.hooks";
import type { Group } from "@/models/Group";

function GroupsList(): ReactElement {
  const { data: groups = [] } = groupHooks.useGroups();

  return (
    <>
      <Navbar title="Gruppen" addButtonTo="add" />
      <Container>
        <h2>Groups</h2>

        <ul>
          {groups.map((group: Group) => (
            <li key={group.id}>{group.id}</li>
          ))}
        </ul>
      </Container>
    </>
  );
}

export default GroupsList;
