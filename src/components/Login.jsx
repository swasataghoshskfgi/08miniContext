import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div className='bg-blue-950 text-center p-8 text-2xl font-bold'>
        <h1 className='text-white pb-4 text-4xl'>Login</h1>
        <input className='rounded-lg text-center border-2 border-black p-2' 
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input className='rounded-lg text-center border-2 border-black p-2'
        type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />

        <button className='border-2 rounded-lg ml-4 bg-blue-700 p-2' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login