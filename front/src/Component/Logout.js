import { useEffect } from "react";
import { useAuthContexts } from "../hooks/context";
import { Redirect } from "react-router-dom";


const Logout = () => {

const {logout} = useAuthContexts();

useEffect(() => {
    logout();
}, [])

    return (
        <Redirect to="/login" />
    )
}

export default Logout;