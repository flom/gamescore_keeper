import type { ReactElement } from "react";
import ListItem from "../compositions/list/ListItem";
import ListTable from "@/components/compositions/list/ListTable";
import ListTableColumn from "@/components/compositions/list/ListTableColumn";

function GrandTotal(): ReactElement {
  return (
    <ListItem
      right={
        <ListTable>
          <ListTableColumn>8</ListTableColumn>
          <ListTableColumn>10</ListTableColumn>
          <ListTableColumn>4</ListTableColumn>
          <ListTableColumn>999</ListTableColumn>
        </ListTable>
      }
    >
      Summe
    </ListItem>
  );
}

export default GrandTotal;
