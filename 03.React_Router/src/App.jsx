import {useState, useEffect } from 'react';
import Navbar from "./components/Navbar"
import AppRoutes from "./routes/AppRoutes"
function App() {

   const[user, setUser] = useState (null);

   useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if(userData) setUser(userData)
   }, [])

  return (
    <>
     <Navbar user={user} setUser={setUser} />
     <AppRoutes user={user} setUser={setUser} />
    </>
  )
}

export default App
