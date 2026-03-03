

import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
    const handleRoute = async (e)=>{
            const page = e.target.name;

       const token = localStorage.getItem("token");
       if(!token){
        navigate("/login");
       }else{
         navigate(`/${page}`)
       }
  
       
    };
  return (
    <>
      <div className="display-nav">
        <div className="nav-container">
            <div className="logo-container">
              <h2 className="logo">Dev-Journal</h2>
            </div>
          <nav>
          
            <button
              className="btn-nav"
                name="dashboard"
              onClick={handleRoute}
            >
              Dashboard
            </button>
            <button
              className="btn-nav"
              name="create"
              onClick={handleRoute}
            >
              New Entry
            </button>
            <button
              className="btn-nav"
              name="my-entries"
              onClick={handleRoute}
            >
              My Entries
            </button>
            <button
              className="btn-nav"
              name="login"
              onClick={()=>{
                localStorage.removeItem("token");
                navigate("/login")
              }}
            >
              LogOut
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Navbar;
