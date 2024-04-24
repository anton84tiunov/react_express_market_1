import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../models/User';



const Auth: React.FC = () => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.post('http://localhost:5000/users/get_all')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Failed to fetch users:', error);
            });
    }, []);


    return (
        <div>
        <h1>Auth Page</h1>
        <ul>
            {users.map(user => (
                <li key={user.id}>firstName : {user.firstName}, lastName : {user.lastName}, email:  {user.email}</li>
            ))}
        </ul>
    </div>
    );
};

export default Auth;