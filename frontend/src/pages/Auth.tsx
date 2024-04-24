import React, { useState } from 'react';
import axios from 'axios';

const Auth: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        password: ''
    });
    const [isRegistering, setIsRegistering] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (isRegistering) {
                // Регистрация
                await axios.post('http://localhost:5000/user/create', formData);
            } else {
                // Авторизация
                const response = await axios.post('http://localhost:5000/user/check_credentials', formData);
                console.log('Authentication result:', response.data); // Выводим результат в консоль
            }
            console.log('Authentication successful');
        } catch (error) {
            console.error('Authentication failed:', error);
            setError('Authentication failed. Please try again.'); // Устанавливаем сообщение об ошибке
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="mb-4">{isRegistering ? 'Register' : 'Login'}</h1>
                            <form onSubmit={handleSubmit}>
                                {isRegistering && (
                                    <div>
                                        <div className="mb-3">
                                            <label htmlFor="firstName" className="form-label">First Name:</label>
                                            <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="lastName" className="form-label">Last Name:</label>
                                            <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="age" className="form-label">Age:</label>
                                            <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleInputChange} required />
                                        </div>
                                    </div>
                                )}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
                                </div>
                                {error && <div className="alert alert-danger">{error}</div>} {/* Отображаем сообщение об ошибке, если есть */}
                                <button type="submit" className="btn btn-primary">{isRegistering ? 'Register' : 'Login'}</button>
                            </form>
                            <p className="mt-3" onClick={() => setIsRegistering(!isRegistering)}>
                                {isRegistering ? 'Already have an account? Login here' : 'Don\'t have an account? Register here'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;














// import React, {  useEffect, useState } from 'react';
// import axios from 'axios';
// import { User } from '../models/User';



// const Auth: React.FC = () => {

//     const [users, setUsers] = useState<User[]>([]);

//     useEffect(() => {
//         axios.post('http://localhost:5000/user/get_all')
//             .then(response => {
//                 setUsers(response.data);
//             })
//             .catch(error => {
//                 console.error('Failed to fetch users:', error);
//             });
//     }, []);


//     return (
//         <div>
//         <h1>Auth Page</h1>
//         <ul>
//             {users.map(user => (
//                 <li key={user.id}>firstName : {user.firstName}, lastName : {user.lastName}, email:  {user.email}</li>
//             ))}
//         </ul>
//     </div>
//     );
// };

// export default Auth;


