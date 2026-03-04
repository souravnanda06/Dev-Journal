import { useEffect, useState } from "react";
import Navbar from "../components/navbar.jsx";
// import Edit from "./Edit-Journal.jsx";
import JournalCard from "../components/journl-card.jsx";
// import Journal from "../../../server/db/Create-entry";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { response } from "express";
function My_journal() {
  const [data, setData] = useState([]);
  const [ editData, setEditData ] = useState({
    title:"",
    descriptionn:""
  });

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return navigate("/login");
    }
    async function fetchData() {
      const response = await axios.get(
        "http://127.0.0.1:3000/api/dev-journal/alljournal",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setData(response.data);
    }

    fetchData();
  }, []);
  console.log("journal data:", data);
  async function handledelete(id) {
    const token = localStorage.getItem("token");
    await axios.delete(`http://127.0.0.1:3000/api/dev-journal/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setData(data.filter((j) => j._id !== id));
  }
  async function handleUpdate(id) {
    const token = localStorage.getItem("token");
    const response = await axios.put(
      `http://127.0.0.1:3000/api/dev-journal/update/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  
    setEditData(response.data)
  }
  function handleEditSubmit(){

  }
  function handleEdited(e){
    
  }
  return (
    <>
      <div>
        <Navbar />
      </div>
      {editData && (
        <div>
          <h3>Edit Journal</h3>
          <form onSubmit={handleEditSubmit}>
            <input
              name="title"
              type="text"
              value={editData.title}
              onChange={handleEdited}
            ></input>
            <input
              name="description"
              type="text"
              value={editData.description}
              onChange={handleEdited}
            ></input>
            <button
            type="submit"
            >Edit</button>
          </form>
        </div>
      )}
      <div className="journal-list">
        {data.map((j) => (
          <JournalCard
            key={j._id}
            _id={j._id}
            title={j.title}
            description={j.description}
            date={j.createdAt}
            onDelete={handledelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </>
  );
}
export default My_journal;
