import type { ReactElement } from "react";
import Navbar from "../components/compositions/Navbar";
import Container from "../components/compositions/Container";

function AddGroup(): ReactElement {
  return (
    <>
      <Navbar title="Neue Gruppe" backButtonTo="/groups" />
      <Container>Content</Container>
    </>
  );
}

export default AddGroup;
