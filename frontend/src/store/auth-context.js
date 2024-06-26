import { useState, createContext } from "react"


export const AuthContext = createContext({
    user: {},
    setUser: ()=>{},
    accessToken: null,
    refreshToken: null,
    csrftoken: null,
    setAccessToken: () => { },
    setRefreshToken: () => { },
    setCSRFToken: () => { }
})

export const AuthContextProvider = (props) => {

    const [user, setUser] = useState({})
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [csrftoken, setCSRFToken] = useState()

    return (
        <AuthContext.Provider value={{
            user, setUser,
            accessToken, setAccessToken,
            refreshToken, setRefreshToken,
            csrftoken, setCSRFToken
        }}>

        </AuthContext.Provider>
    )
}