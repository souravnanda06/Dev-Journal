
import { Link } from "react-router-dom";

function LandingPage() {
   




  return (
    <>
      <div className="landing-container">
        <div>
          <h1 className="hero">Devloper's Journey</h1>
          <Link to={"/login"} className="btn-landing">login</Link>
         <Link to={"/register"}>Register</Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
