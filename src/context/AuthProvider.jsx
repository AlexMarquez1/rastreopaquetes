import { createContext, useState } from "react"

export const AuthContext = createContext({});

export default function AuthProvider ({children}) {

    const [userAuth, setUserAuth] = useState({})
     
  return (
    <AuthContext.Provider
        value={{
            userAuth,
            setUserAuth
        }}
    >
        {children}
    </AuthContext.Provider>
  )
}


