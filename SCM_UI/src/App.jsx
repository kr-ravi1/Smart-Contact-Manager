import React, { useState, useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Service from './components/Service/Service'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import { ThemeProvider } from './contexts/Theme'


const router = createBrowserRouter(
    createRoutesFromElements(
     <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home/>}></Route>
       <Route path='about' element={<About/>}></Route>
       <Route path='contact' element={<Contact/>}></Route>
       <Route path='service' element={<Service/>}></Route>
       <Route path='signup' element={<Signup/>}></Route>
       <Route path='login' element={<Login/>}></Route>
     </Route>
    )
 )

function App() {

    const [themeMode, setThemeMode] = useState(localStorage.getItem("theme") === null ? "light" : localStorage.getItem("theme"));

    const lightTheme = () => {
        setThemeMode("light");
    }

    const darkTheme = () => {
        setThemeMode("dark");
    }

    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark");
        document.querySelector('html').classList.add(themeMode);
        localStorage.setItem("theme",themeMode)
    }, [themeMode])

    return (
        <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
