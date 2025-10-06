import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [email,setEmail] = useState  (" ");
    const [password,setPassword] = useState("");

    const handleLogin=async(e) =>{
        e.preventDefault();
        try {
            const res=await axios.post("http://localhost:5000/api/auth/login",{email,password});
            alert(res.data.message);//shows login successs;
            localStorage.setItem("token",res.data.token);//this saves token;
        } catch (err) {
            alert(err.response.data.error);
            
        }
    };
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px", width: "300px" }}>
        <h2>Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#6C63FF", color: "white", border: "none", borderRadius: "5px" }}>Login</button>
      </form>
    </div>
  );
};


export default Login
