import React from "react";

import { useSession, authHandler, SIGN_OUT } from "../../hooks/useAuth";

const profilePic = {
  width: "100px",
  borderRadius: "50px",
  display: "block",
  margin: "0 auto"
};

const Dashboard = () => {
  const { user } = useSession();
  // console.log(user);
  return (
    <div className="dashboard">
      <img style={profilePic} src={user.profile} alt={user.name} />
      {user.name}
      <br />
      <button onClick={() => authHandler(SIGN_OUT)}>Log Out</button>
    </div>
  );
};

export default Dashboard;
