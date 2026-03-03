import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
function Dashboard() {
  const [userData, setData] = useState({
    name:"",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
     navigate("/login");
     return;
    }
    async function fetchData (){
      const response = await axios.get(
        "http://127.0.0.1:3000/api/dev-journal/dashboard",
    
        {
          headers:{
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("Server Response",response.data);
      setData(response.data);
      
    };
    fetchData();
  }, []);
 
  console.log("User Data:",userData)
  return (
    <>
      <div className="dash-container">
        <div>
          <Navbar />
        </div>
        <div className="dash-content">
        {userData.name&&<h1>Good Morning, {userData.name}</h1>}
        </div>
      </div>
    </>
  );
}
export default Dashboard;
