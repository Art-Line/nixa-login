import { useState } from "react";
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import './Login.scss'

function Login(props) {

    const [error, setError] = useState(false);

    const loginForm = (e) => {
        e.preventDefault();
        const userData = props.usersList.find(item => item.username === e.target.login.value)
        if (userData) {
            props.setUserInfo(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            props.setIsLogin(true)
        } else {
            setError(true);
        }
    }

    return (
        <div className="login-page d-flex px-3 py-5">
            <main className="login-page__form-signin w-100 m-auto p-4 px-sm-5 pt-sm-5 pb-sm-4">
                <h1 className="text-center">Sign in to your account</h1>
                <form onSubmit={loginForm}>
                    <div className="pb-3">
                        <Input
                            label="Enter your login"
                            errorInput={error && "user not found"}
                            type="text"
                            name="login"
                            className={`default-input default-input--block ${error ? 'default-input--error' : ''}`}
                            change={() => setError(false)}
                        />
                    </div>
                    <div className="pb-3">
                        <Input
                            label="Enter password"
                            type="password"
                            name="password"
                            className="default-input default-input--block"
                        />
                    </div>
                    <div className="pb-4">
                        <Checkbox
                            text="Keep me signed in"
                        />
                    </div>
                    <div className="pb-4">
                        <Button
                            type="submit"
                            className="btn btn--block btn--purpe btn--md"
                            text="Sign in"
                        />
                    </div>
                    <p className="text-center">
                        <a className="login-page__forgot-password" href="!#">Forgot your password</a>
                    </p>
                </form>
            </main>
        </div>
    )
}

export default Login;