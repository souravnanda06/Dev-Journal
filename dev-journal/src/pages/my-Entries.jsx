import { useEffect, useState } from "react";
import Navbar from "../components/navbar.jsx";
import JournalCard from "../components/journl-card.jsx";
// import Journal from "../../../server/db/Create-entry";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { response } from "express";
function My_journal(){
    const [data,setData]=useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token){
            return navigate("/login");
        }   
       async function fetchData(){
            const response = await axios.get("http://127.0.0.1:3000/api/dev-journal/alljournal",{
             headers:{
                Authorization:`Bearer ${token}`
             }
            })
            setData(response.data);
        }
   

        fetchData();
    },[]
    )
         console.log("journal data:",data)
async function handledelete(id){
        const token = localStorage.getItem("token");
        await axios.delete(`http://127.0.0.1:3000/api/dev-journal/delete/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        setData(data.filter((j)=>j._id!==id))
    }
    return<>
    <div>
          <Navbar />
    </div>
    <div className="journal-list">
        {data.map((j)=>(
            <JournalCard 
           key={j._id}
           _id={j._id}
            title={j.title}
            description={j.description}
            date={j.createdAt}
            onDelete = {handledelete}
            />
        ))}
    </div>
    </>

}
export default My_journal