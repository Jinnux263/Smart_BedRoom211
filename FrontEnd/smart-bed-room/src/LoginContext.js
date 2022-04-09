import { useState, createContext } from "react";

const LoginContext = createContext();


function LoginProvider({children}) {
    const [state, setState] = useState({
        isLogin: false,
        user: {}
    });
    return (
    <LoginContext.Provider value={{state, setState}}>
        {children}
    </LoginContext.Provider>
    )
}

export { LoginContext, LoginProvider }
