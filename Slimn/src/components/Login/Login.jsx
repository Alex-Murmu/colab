// Login.jsx

import React from 'react';
import axios from 'axios'; // Import Axios for making API requests

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Make an API request to authenticate the user
            const response = await axios.post('/api/login', {
                username: this.state.username,
                password: this.state.password
            });

            // Assuming the response contains a token or user data
            const { token, user } = response.data;

            // Save the token or user data to local storage or state
            // For example:
            localStorage.setItem('token', token);
            // or
            this.props.setUser(user);

            // Redirect to the dashboard or home page
            // For example:
            this.props.history.push('/dashboard');
        } catch (error) {
            console.error('Error logging in:', error.message);
            // Handle login error (e.g., show an error message)
        }
    }

    render() {
        return (
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={this.handleSubmit}
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="username"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <input
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                            type="submit"
                            value="Submit"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
