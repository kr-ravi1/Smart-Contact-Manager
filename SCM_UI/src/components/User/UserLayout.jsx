import React from 'react'
import UserSidebar from './UserSidebar'
import { Outlet } from 'react-router-dom'
import UserNavbar from './UserNavbar'

function UserLayout() {
  return (
    <>
        <UserSidebar/>
        <div className='sm:pl-64 fixed w-full'>
        <UserNavbar/>
        </div>
        <div className='sm:pl-64 pt-20 ml-3 mr-3'>
        <Outlet/>
        </div>
    </>
  )
}

export default UserLayout