import { User } from "@/types";
import React from "react";

const UserContext = React.createContext<{
  user?: User;
  setUser?: React.Dispatch<React.SetStateAction<User | undefined>>;
}>({});

export default UserContext;
