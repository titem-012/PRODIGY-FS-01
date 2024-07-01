import React, { useEffect, useState } from 'react'
import UserComponent from '../components/UserComponent'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import useGetUser from '../hooks/useGetUser';
import LogOutComponent from '../components/LogOutComponent';

export default function UserPage() {
  const {isAuth,setIsAuth } = useAuthContext();
  const {getUser} = useGetUser();
  const navigator = useNavigate();
  let [data,setData] = useState([[]]);
  useEffect(()=>{
     const fetchData = async() => {
      const userData = await getUser()
      if (userData) {
        setData(userData)
      }
      else{
        localStorage.removeItem("authUser");
        setIsAuth(false)
        navigator("/login")
      }
     }
     fetchData()
  },[])
  return (
    <>
      <UserComponent Data = {data}/>
      <LogOutComponent />
    </>
  )
}
