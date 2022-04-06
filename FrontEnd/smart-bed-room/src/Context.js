import React, {useState, useEffect, createContext } from "react";
import axios from "axios";

const Data = createContext();

function ContextProvider(props) {
    const [state, setState] = useState(
        {
            isLoggedIn: false,
            user: {},
        }
    )
    return (
        <Data.Provider
            value={{
                state,
                setState,
            }}
        >
            {props.children}
        </Data.Provider>
    );
}

export { Data, ContextProvider };