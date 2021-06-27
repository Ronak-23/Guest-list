import { createContext } from "react";
import AuthState from "./authstate";

const AuthContext = createContext(AuthState)
export default AuthContext