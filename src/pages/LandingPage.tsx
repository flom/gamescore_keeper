import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/compositions/Navbar";

function LandingPage(): ReactElement {
  return (
    <div>
      <Navbar title="Game Score" />
      <div className="container m-auto">
        <ul>
          <li>
            <Link to="/contributions">Contributions</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LandingPage;
