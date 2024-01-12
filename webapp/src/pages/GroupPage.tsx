import type { ReactElement } from "react";
import Navbar from "@/components/compositions/Navbar";
import groupHooks from "@/api/group.hooks";
import { getGroupLabel } from "@/models/Group";
import { List } from "@/components/compositions/list";
import ListSeparator from "@/components/compositions/list/ListSeparator";
import ListTable from "@/components/compositions/list/ListTable";
import ListTableColumn from "@/components/compositions/list/ListTableColumn";
import ListItem from "@/components/compositions/list/ListItem";
import { Link } from "react-router-dom";

function GroupPage(): ReactElement {
  const { data: group } = groupHooks.useGroup();

  if (group === undefined) {
    return <>Group not found</>;
  }

  const title: string = getGroupLabel(group);
  return (
    <>
      <Navbar title={title} backButtonTo="/groups" />
      <List>
        <ListItem
          right={
            <ListTable>
              <ListTableColumn>
                <span className="font-bold">ABC</span>
              </ListTableColumn>
              <ListTableColumn>
                <span className="font-bold">B</span>
              </ListTableColumn>
            </ListTable>
          }
        >
          Spieler
        </ListItem>
        <ListItem
          right={
            <ListTable>
              <ListTableColumn>8</ListTableColumn>
              <ListTableColumn>10</ListTableColumn>
            </ListTable>
          }
        >
          Summe
        </ListItem>

        <ListSeparator />

        <ListItem component={Link} to="Quixx">
          Quixx
        </ListItem>
        <ListItem component={Link} to="NochMal">
          Noch Mal!
        </ListItem>
        <ListItem component={Link} to="Skyjo">
          Skyjo
        </ListItem>
      </List>
    </>
  );
}

export default GroupPage;
