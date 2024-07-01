import React from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useSignUp from '../hooks/useSignUp';

export default function SignUpComponent() {
    const { signUp } = useSignUp();
    const [data,setData] = useState({
        Fullname:"",
        Username:"",
        Password:"",
        Dob:"",
        Gender:""
    });
    const SignUp = async(e) => {
        e.preventDefault();
        // console.log(data)
        await signUp(data)
    }
  return (
    <>
        <form>
            <div className='rounded-lg border-custom shadow-sm'>
            <h2 className='text-2xl mt-14 mb-8 font-bold mx-36'>Sign Up</h2>
                <input type="text" name='Fullname' className='h-10 p-5 rounded-lg w-64 mx-5 my-4' value={data.Fullname} placeholder='Fullname' onChange={(event)=>{setData({...data,Fullname:event.target.value})}}/> <br />
                <input type="date" name='DOB' className='h-10 p-5 rounded-lg w-64 mx-5 my-4' value={data.Dob} placeholder='Date of Birth' onChange={(event)=>{setData({...data,Dob:event.target.value})}}/> <br />
                <input type="text" name='UserName' className='h-10 p-5 rounded-lg w-64 mx-5 my-4' value={data.Username} placeholder='Username' onChange={(event)=>{setData({...data,Username:event.target.value})}}/> <br />
                <input type="password" name='Password' className='h-10 p-5 rounded-lg w-64 mx-5 my-4' value={data.Password} placeholder='Password' onChange={(event)=>{setData({...data,Password:event.target.value})}}/><br />
                <label htmlFor="Gender">Gender:</label>
                <input type="radio" name='Gender' className='mx-5 my-4' value={"male"} placeholder='Password' onChange={(event)=>{setData({...data,Gender:event.target.value})}}/>Male
                <input type="radio" name='Gender' className='mx-5 my-4' value={"female"} placeholder='Password' onChange={(event)=>{setData({...data,Gender:event.target.value})}}/>Female<br />
                <button type='submit' className='py-3 px-10 rounded-lg mx-5 mb-9 mt-4 backgroundColor border-gray-800  border-2' onClick={SignUp}>Sign Up</button>
                <p className='mb-16'>Already User? <Link to='/'>Sign In</Link></p>

            </div>
        </form>
    </>
  )
}
