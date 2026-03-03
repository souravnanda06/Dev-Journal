import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [formdata, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/auth/login",
        formdata,
      );
      console.log("Server Response:", response.data);
      setMessage(response.data.message);
      const token = response.data.token;
      localStorage.setItem("token",token)
      if(token){
       setTimeout(() => {
        navigate("/dashboard")
       },1000);
      }
      formCleanup();
    } catch (err) {
      console.error(err.message);
    }
  };
  const formCleanup = () => {
    setForm({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className="formblock">
        <form onSubmit={handleSubmit} className="auth-form">
          <h3>login:</h3>
          <input
            type="email"
            name="email"
            className="auth-input"
            value={formdata.email}
            placeholder="email"
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="password"
            className="auth-input"
            value={formdata.password}
            placeholder="password"
            onChange={handleChange}
          ></input>
          <button className="btn-auth" type="submit">
            Login
          </button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </>
  );
}
export default Login;
