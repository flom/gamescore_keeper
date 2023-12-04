import type { ReactElement } from "react";
import Navbar from "../components/compositions/Navbar";
import Container from "../components/compositions/Container";
import Button from "../components/basics/Button";
import TextField from "../components/basics/TextField";
import IconButton from "../components/basics/IconButton";

function AddGroup(): ReactElement {
  return (
    <>
      <Navbar title="Neue Gruppe" backButtonTo="/groups" />
      <Container>
        <div className="flex flex-col gap-2 p-2">
          <div>
            <TextField label="Spieler" />
          </div>
          <div>
            <TextField label="Spieler" />
          </div>
          <div className="m-auto">
            <IconButton>
              <i className="fa-solid fa-plus fa-xl" />
            </IconButton>
          </div>
          <div>
            <Button>Gruppe erstellen</Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AddGroup;
