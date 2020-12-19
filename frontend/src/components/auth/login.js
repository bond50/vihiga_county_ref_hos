import React, {useState} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {login} from "../../store/actions/auth";

const mapStateToProps = (state) => {
    return {}
}

const Login = ({login}) => {

    const initialState = {
        email: "",
        password: ""

    }
    const [formData, setFormData] = useState(initialState);
    const {email, password} = formData

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)

    };

    // redirect to home page if the user is authenticated
    const handleChange = (e) => {
        const value = e.target.value
        setFormData({...formData, [e.target.name]: value});
    };

    return (
        <div className='ui container'>
            <h1>
                Sign In
            </h1>
            <p>Sign in to your account</p>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <input
                        type="email"
                        placeholder='Your Email Address'
                        onChange={event => handleChange(event)}
                        value={email}
                        name='email'
                        required
                    />
                </div>
                <div className="field">
                    <input
                        type="password"
                        placeholder='Your Password'
                        onChange={event => handleChange(event)}
                        value={password}
                        required
                        name='password'
                    />
                </div>
                <button className=" ui primary button">Login</button>
            </form>
            <p>Dont have an account?
                <Link to='/signup'> Sign Up</Link>
            </p>
            <p>Forgot Your Password?
                <Link to='/reset-password'> Reset password</Link>
            </p>
        </div>

    );
};

export default connect(mapStateToProps, {login})(Login);
