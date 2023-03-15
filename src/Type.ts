import React from "react"


export type AuthUser = {
    email : string,
    updateFunction : (email : string,isValid : boolean) => void,
    token : boolean
}

export type childNode = {
    children : React.ReactNode
}