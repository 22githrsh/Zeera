
import React, { useContext, useEffect } from "react";
import useUser from "../hooks/useUser";

const UserPage = () => {
  const user = useUser()
  return (
    <div>{user?.email}</div>
  )
}

export default UserPage