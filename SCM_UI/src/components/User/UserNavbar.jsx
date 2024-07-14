import React, { useEffect, } from 'react';
import { Link, NavLink, useNavigate, } from 'react-router-dom';
import useTheme from '../../contexts/Theme';


function UserNavbar() {

  const { lightTheme, darkTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      document.getElementById('theme-btn').querySelector('span').textContent = "Dark"
    }
    else {
      document.getElementById('theme-btn').querySelector('span').textContent = "Light"
    }
  }, [])

  const changeTheme = () => {
    const darkModeStatus = localStorage.getItem("theme")
    if (darkModeStatus === "light") {
      document.getElementById('theme-btn').querySelector('span').textContent = "Light"
      darkTheme()
    }
    else {
      document.getElementById('theme-btn').querySelector('span').textContent = "Dark"
      lightTheme()
    }
  }

  const handleLogOut = () => {
    localStorage.removeItem("UserData");
    navigate('/login');
  }

  return (
    <nav className='bg-gray-50 border-gray-200 dark:bg-gray-800 z-50'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../images/phone.png" className="h-6" alt="scm logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SCM</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
          <button
            id='theme-btn'
            type="button"
            className="text-white bg-gray-600 hover:bg-gray-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-500 dark:hover:bg-gray-300"
            onClick={changeTheme}
          ><i className="fa-solid fa-circle-half-stroke"></i><span className='ml-1'>Dark</span></button>
          <button
            type="button"
            onClick={handleLogOut}
            className="hidden md:flex text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
          >Logout</button>

          <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
            <li>
              <NavLink to="/" className={({ isActive }) => `block py-2 px-3 md:p-0 ${isActive ? 'text-blue-700 dark:text-blue-600' : 'text-gray-900  dark:text-white'}  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `block py-2 px-3 md:p-0 ${isActive ? 'text-blue-700 dark:text-blue-600' : 'text-gray-900  dark:text-white'}  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `block py-2 px-3 md:p-0 ${isActive ? 'text-blue-700 dark:text-blue-600' : 'text-gray-900  dark:text-white'}  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="/service" className={({ isActive }) => `block py-2 px-3 md:p-0 ${isActive ? 'text-blue-700 dark:text-blue-600' : 'text-gray-900  dark:text-white'}  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Service</NavLink>
            </li>
            <li>
              <button
                type="button"
                onClick={handleLogOut}
                className="md:hidden block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default UserNavbar