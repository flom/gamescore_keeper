import type { ReactElement } from "react";
import ListItem from "../compositions/list/ListItem";
import { Link } from "react-router-dom";

function SingleGameScore(): ReactElement {
  return (
    <ListItem component={Link} to="Quixx">
      Quixx
    </ListItem>
  );
}

export default SingleGameScore;
