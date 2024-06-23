import './App.css';
import Alert from './components/Alert';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import User from './components/User';
import React, { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  // Use sate and there function
  const [mode, setmode] = useState('light')//control dark or light mode

  const [alter, setAlter] = useState(null)

  const showAlter = (massage, type) => {
    setAlter({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlter(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.background = '#042743';
      showAlter("Dark mode is enable now", "success")
    }
    else {
      setmode('light');
      document.body.style.background = 'white';
      showAlter("Light mode is enable now", "success")
    }
  }

// Routor 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alter} />
        <TextForm heading=" Try TextUtils - Word Counter, Charactor Counter, Remove Extra Spaces" showAlter={showAlter} mode={mode} />
      </>
    },
    {
      path: "/about",
      element: <>
        <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alter}  />
        <Aboutus heading="About us"  mode={mode} />
      </>
    },
    // {
    //   path: "/user/:username",
    //   element: <>
    //     <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
    //     <User />
    //   </>
    // },
  ])

  return (
    <>
      <RouterProvider router={router} />
      <div className="container my-3">
        {/* about deafult set use */}
      </div>
    </>
  );
}

export default App;
