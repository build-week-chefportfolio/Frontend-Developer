import React from 'react';
import axios from 'axios';

class SignIn extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    /** api/auth/register api/auth/login api/auth/logout api/users */

    login = e => {
        e.preventDefault();
        axios
            .post('https://chefportfolioo.herokuapp.com/api/auth/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected')
            })
            .catch(err => console.log(err.response));
    };

    render() {
        return (
            <div>
                <form className='login' onSubmit={this.login}>
                    <h3>Login to See your Friends List</h3>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder='Username'
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder='Password'

                    />
                    <button>Log in</button>
                </form>
            </div>
        );
    }
}

export default SignIn;
