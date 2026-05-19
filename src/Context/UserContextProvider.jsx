import { useState, useEffect } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const savedUser = localStorage.getItem("userdata");

        if (savedUser && savedUser !== "undefined") {

            try {

                setUser(JSON.parse(savedUser));

            }

            catch {

                localStorage.removeItem("userdata");

            }

        }

        setLoading(false);

    }, []);
    return (

        <UserContext.Provider
            value={{
                user,
                setUser,
                loading,
            }}
        >

            {children}

        </UserContext.Provider>

    );

}

export default UserContextProvider;