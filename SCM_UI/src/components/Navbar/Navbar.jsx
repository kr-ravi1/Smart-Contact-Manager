import React, { useEffect, } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useTheme from '../../contexts/Theme';

function Navbar() {

    const { lightTheme, darkTheme } = useTheme();

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

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login')
    }

    const handleSignup = () => {
        navigate('/signup')
    }

    return (
        <nav className='bg-gray-50 border-gray-200 dark:bg-gray-800'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="../images/phone.png" className="h-6" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SCM</span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="hidden md:flex text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                    >Login</button>
                    <button
                        type="button"
                        onClick={handleSignup}
                        className="hidden md:flex text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Signup</button>
                    <button
                        id='theme-btn'
                        type="button"
                        className="text-white bg-gray-600 hover:bg-gray-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-500 dark:hover:bg-gray-300"
                        onClick={changeTheme}
                    ><i className="fa-solid fa-circle-half-stroke"></i><span className='ml-1'>Dark</span></button>
                    <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
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
                                onClick={handleLogin}
                                className="block py-2 px-3 md:p-0 rounded md:hidden hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >Login</button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={handleSignup}
                                className="block py-2 px-3 md:p-0 rounded md:hidden hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Signup</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar