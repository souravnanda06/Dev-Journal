import { useNavigate } from "react-router-dom";

function LandingPage() {
   
const navigate = useNavigate();



  return (
    <>
      <div className="landing-container">
        <div>
          <h1 className="hero">Devloper's Journey</h1>
          <button className="btn-landing" onClick={()=>{navigate("/login")}}>Login</button>
          <button className="btn-landing" onClick={()=>{navigate("/register")}} >Register</button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
