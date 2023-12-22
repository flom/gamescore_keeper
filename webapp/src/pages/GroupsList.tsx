import type { ReactElement } from "react";
import Navbar from "../components/compositions/Navbar";
import Container from "../components/compositions/Container";

function GroupsList(): ReactElement {
  return (
    <>
      <Navbar title="Gruppen" addButtonTo="add" />
      <Container>Hello</Container>
    </>
  );
}

export default GroupsList;
