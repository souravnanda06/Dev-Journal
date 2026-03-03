import { useState } from "react"
import Navbar from "../components/navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Create(){
       const [data,setData] = useState({
        title:"",
        description:""
    })
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    if(!token){
        navigate("/login")
        return;
    }
 
    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value,
        }
        )
    }
 const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
     const Response = await axios.post("http://127.0.0.1:3000/api/dev-journal/create-entry",data,{
        headers:{
            Authorization:`Bearer ${token}`
        }
     })
     console.log(Response);
     cleanup();
    }catch(err){
        console.error(err.message);
    }
 }
 function cleanup(){
    setData({
        title:"",
        description:""
    })
 }
  return <>
  <div className="dash-container">
    <div >
   <Navbar />
    </div>
    <div className="create-content" >
        <h1>Create Your Journey Here..</h1>
        <form onSubmit={handleSubmit}className="Create-form">
            <label
            for="Title"
            
            >Title</label>
          <input
          className="Create-input"
          type="text"
          id="Title"
          name="title"
          value={data.title}
          placeholder="Title"
          onChange={handleChange}
          ></input>
          <label
          for="description"
          >Description</label>
            <textarea 
            type="text"
            id="description"
            className="Create-input"
            name="description"
            value={data.description}
            placeholder="Description"
            maxLength={300}
            rows={20}
            cols={50}
            onChange={handleChange}
            ></textarea>
            <button
            type="submit"
            className="create-btn"
            
            >
                Submit
            </button>
        </form>
    </div>
  </div>
  </>
}
export default Create