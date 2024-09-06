import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

    const token = localStorage.getItem("token")

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate("/")
        localStorage.removeItem("token");
        alert("Log out success");
    }


    return (
        <>
            <div className='bg-blue-600 text-white  shadow-md h-auto min-h-16 flex-wrap border-b border-red-300    flex justify-center items-center space-x-5  font-semibold'>
                <Link className='hover:border-b-2 hover:border-red-500' to="/">Home</Link>
                <Link className='hover:border-b-2 hover:border-red-500' to="/weatherreport">Weather Report</Link>
                <Link className='hover:border-b-2 hover:border-red-500' to="/dailyreport">Weekly-Report</Link>
                {token ?
                   ( <>
                    <p  className='max-h-8 rounded-xl text-white border px-2
                py-1 bg-orange-400'>You are Logged in</p>
                   <p onClick={handleLogout} className=' rounded-xl max-h-8 text-center hover:cursor-pointer text-white border px-2
                py-1 bg-red-500'>Logout</p>
                </>)
                    :
                    <Link className='hover:border-b-2 hover:border-red-500' to="/login">Login</Link>
                }
                <Link className='hover:border-b-2 hover:border-red-500' to="/dataeg">Practise-Data-Table</Link>
            </div>
        </>
    )
}

export default Header