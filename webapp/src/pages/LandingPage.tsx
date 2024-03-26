import { type ReactElement, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/compositions/Navbar";

function LandingPage(): ReactElement {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/groups");
  });

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
