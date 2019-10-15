import React from "react";

import { useSession, authHandler, SIGN_OUT } from "../../hooks/useAuth";

import "./Dashboard.scss";

const Dashboard = () => {
  const { user } = useSession();
  // console.log(user);
  return (
    <div className="Dashboard">
      <img className="profile-pic" src={user.profile} alt={user.name} />
      <h1>{user.name}</h1>
      <button onClick={() => authHandler(SIGN_OUT)}>Log Out</button>
    </div>
  );
};

export default Dashboard;
