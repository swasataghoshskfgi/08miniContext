import { useState } from 'react'  
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1 className="bg-blue-950 text-white text-center p-8 text-5xl font-bold ">Context API</h1> 
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
