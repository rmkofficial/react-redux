import { useState } from "react";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <form>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
};

export default UserForm;
