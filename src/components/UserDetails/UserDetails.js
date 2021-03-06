import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UserDetails = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});
    const {name, email, website, phone} = user;
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [id]);
    return (
        <div>
            <h1>User Details: User ID No.{id}</h1>
            <h3>Name: {name}</h3>
            <p>E-mail: {email}</p>
            <p>Website: {website}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default UserDetails;