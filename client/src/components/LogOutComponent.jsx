import React from 'react'
import useLogOut from '../hooks/useLogOut'
import { useAuthContext } from '../context/authContext'

export default function LogOutComponent() {
    const {logOut} = useLogOut()
    const {setIsAuth} = useAuthContext();
    const logout = () => {
      logOut()
    }
  return (
    <button className='backgroundColor border-gray-800' onClick={logout}>LogOut</button>
  )
}
