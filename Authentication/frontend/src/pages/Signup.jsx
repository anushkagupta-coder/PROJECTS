import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", { name, email, password });
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "15px", width: "300px" }}>
        <h2>Signup</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#6C63FF", color: "white", border: "none", borderRadius: "5px" }}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
