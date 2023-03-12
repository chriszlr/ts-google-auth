import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState(null);

  const handleClick = () => {
    window.open("http://localhost:5002/auth/google/callback", "_self");
  };

  const handleLogout = () => {
    window.open("http://localhost:5002/auth/logout", "_self");
  };

  const getUser = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5002/auth/login/success",
        {
          withCredentials: true,
        }
      );

      console.log(data.user);
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {user ? (
        <div>
          <h1>{user.username}</h1>
          <img src={user.profilePic} alt="" referrerPolicy="no-referrer" />
          <button
            onClick={() => {
              handleLogout();
              setUser(null);
            }}
          >
            Remove User
          </button>
        </div>
      ) : (
        <div>
          <button onClick={handleClick}>Sign in with Google</button>
          <button onClick={getUser}>Get User</button>
        </div>
      )}
    </div>
  );
};

export default App;
