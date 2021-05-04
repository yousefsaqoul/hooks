import React, { useState } from 'react'

const Contacts = () => {
    const [login, setLogin] = useState(false)
    return (
        <div>
            <h1>{login ? 'you are log in' : 'you are log out'}</h1>
        </div>
    )
}

export default Contacts
