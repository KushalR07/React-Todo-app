import { useState , createContext, useContext} from "react";

export const Authcontext = createContext();
export const useAuth=()=>useContext(Authcontext);
export  function AuthProvider({children}){
    const [isAuthenticated, setAuthenticated]= useState(false);
    const [username,setUsername] =useState(null);

    function login(username, password){
        if(username === 'Kushal' && password === 'dummy'){
            setAuthenticated(true);
            setUsername(username);
            return true;
        } else {
            setAuthenticated(false);
            setUsername(null);
            return false;
        }
    }

    function logout(){
        setAuthenticated(false);
        setUsername(null);
    }

    return (
      <Authcontext.Provider value={{ isAuthenticated, setAuthenticated, username, login, logout }}>
        {children}
      </Authcontext.Provider>
    );
}