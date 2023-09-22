import { createContext, useContext } from "react";

export const UserContext = createContext();

export function UserProvider({children}) {
    return <UserContext.Provider value={{name: "Aryan More"}}>{children}</UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext);