import type { FC } from "react";
import './login.scss'


interface Props {
    type: 'login' | 'signup'
}

const Login: FC<Props> = ({type}) => {
    return (
        <div className="form_container">
            <form className="login_form">
                <div className="inputs_wrapper">
                    <div className="input_wrapper">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email address" />
                    </div>
                    <div className="input_wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" />
                    </div>
                    <span>Forgot password? <a href="#">Send reset code</a></span>
                    <button type="submit" className="wide_button" >{type === 'signup' ? 'Sign up' : 'Log in'}</button>
                </div>
                <div className="hr_wrapper">
                    <div></div>
                    <span>or</span>
                    <div></div>
                </div>
                <div className="signup_social">
                    <button className="wide_button">
                        <img src='/icons/google.svg' alt="google" />
                        <span>Sign up with Google</span>
                    </button>
                    <button className="wide_button">
                        <img src='/icons/github.svg' alt="google" />
                        <span>Sign up with GitHub</span>
                    </button>
                    <button className="wide_button">
                        <span>Sign up with SSO for Enterprise</span>
                    </button>
                </div>
                <div className="toggle_div">
                    <span>Don't have an account? </span>
                    <a href={type === 'signup' ? '/login' : '/signup'}>{type === 'signup' ? 'Log in' : 'Sign up'}</a>
                </div>
            </form>
        </div>
    )
}

export default Login