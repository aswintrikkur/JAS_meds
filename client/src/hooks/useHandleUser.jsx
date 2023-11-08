import React, { useContext } from 'react'
import { AuthContext } from '../contextAPI/AuthContext'
import { useNavigate } from 'react-router-dom';

export const useHandleUser = () => {

    const {setToken,setUser}=useContext(AuthContext);
    const navigate = useNavigate();


    const userLogin =()=>{

    }


    const userLogOut = ()=>{
		setToken(false);
		setUser(false);
		localStorage.clear();
        document.location.href="/"; 
        // navigate("/");

    }




    return {userLogin, userLogOut}
}
