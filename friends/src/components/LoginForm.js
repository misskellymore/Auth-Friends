import React from 'react';
import {} from '../utils/axiosWithAuth.js';


class LoginForm extends React.Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    };


    handleChange = e => {
        this.setState({
            ...this.state.credentials,
            [e.target.name] : e.target.value 
        });
    };



    render() {
        return(
            <div>
                <form>
                    <input  type="text"
                            name="username"
                            placeholder="UserName"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                             />

                    <input  type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                             />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}


export default LoginForm;