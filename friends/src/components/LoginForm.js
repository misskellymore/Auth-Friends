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
            
        })
    }



    render() {
        return(
            <div>
                <form>
                    <input  type="text"
                            name="username"
                            placeholder="UserName"
                            value={}
                            onChange={}
                             />

                    <input  type="password"
                            name="password"
                            placeholder="Password"
                            value={}
                            onChange={}
                             />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}


export default LoginForm;