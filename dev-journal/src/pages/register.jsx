import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
function Register() {
    const navigate = useNavigate();
    const [message,setMessage] = useState("")
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/auth/register",
        form,
      );
      console.log("Server Response:", response.data);
      setMessage(`${response.data.name} Is SuccessFully Registered`)
      formCleanup();
      setTimeout(()=>{
       navigate("/login")
      },1500)
    } catch (err) {
      console.error(err.messagae || "error:", err.response?.data);
    }
  };
  function formCleanup(){
    setForm({
        name:"",
        email:"",
        password:""
    })
  }
 
  return (
    <>
    <div className="formblock" >
      <form onSubmit={handlesubmit} className="auth-form">
        <h3>Register:</h3>
        <input
          type="text"
          name="name"
          className="auth-input"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        ></input>
        <input
          type="email"
          name="email"
          className="auth-input"
          placeholder="email"
          value={form.email}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          className="auth-input"
          placeholder="password"
          value={form.password}
          onChange={handleChange}
        ></input>
        <button className="btn-auth"  type="submit" >Register</button>
        {message && <p>{message}</p>}
      </form>
      
      </div>
    </>
  );
}
export default Register;
