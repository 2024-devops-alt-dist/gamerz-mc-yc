import { useContext } from "react";
import { LoginContext } from "./LoginContext";

export const useLogin = () => useContext(LoginContext);
