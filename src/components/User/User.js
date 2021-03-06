import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    const userStyle = {
        border: '1px solid gray',
        padding: '10px',
        margin: '10px',
        borderRadius: '3px'
    }
    return (
        <div>
            {users.map(user => 
            <div style={userStyle}>
                <h1>Name: {user.name}</h1>
                <p>E-mail: {user.email}</p>
                <Link to={`/users/${user.id}`}><button>More Details</button></Link>
            </div>)}
        </div>
    );
};

export default User;