import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';


class LoginForm extends React.Component {

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
            [e.target.name] : e.target.value 

            }
            
        });
    };

    login = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('/login', this.state.credentials)
            .then(res => {
                localStorage.getItem('token', res.data.payload);
                // this.props.history.push('/protected');
            })

            .catch(error => console.log(error));
            
    }



    render() {
        return(
            <div>
                <form onSubmit={this.login}>
                    <input  type="text"
                            name="username"
                            placeholder="UserName"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                             />

                    <input  type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                             />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}


export default LoginForm;