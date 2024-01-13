import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div className='bg-blue-950 text-white text-center p-8 text-3xl font-bold '>please login</div>

    return <div className='bg-blue-950 text-white text-center p-8 text-3xl font-bold'> Welcome {user.username}</div>
}

export default Profile