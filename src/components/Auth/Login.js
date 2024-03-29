import React, { useState } from 'react';
import useForm from './useForm';
import validate from './validate';
import facebook from '../../assets/images/icons/facebook.png';
import google from '../../assets/images/icons/google.png';

const Login = () => {

    let { values, errors, inputHandler, submitHandler } = useForm(submit, validate);
    const [check, setCheck] = useState(false);
    values.check = check;

    const { email, password } = values;

    function submit() {
        
    }

    return (
        <form onSubmit={submitHandler} noValidate>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={inputHandler}
                    defaultValue={values.email}
                    placeholder="jhondeo@example.com"
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={inputHandler}
                    defaultValue={values.password}
                    placeholder="Password"
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="mb-3  d-flex justify-content-between">
                <div className="form-check">
                    <input
                        onClick={(event) => setCheck(event.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                        name="remember"
                        id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">Remember Me</label>
                </div>
                <span style={{ cursor: 'pointer' }}>Forget Password</span>
            </div>

            <button
                type="submit"
                className={email && password ? 'btn btn-primary w-100' : 'btn btn-primary disabled w-100'}
            >Login
            </button>
            <div className="my-3 text-center">
                <button className="btn btn-outline-primary mr-3">Login With <img src={facebook} alt="" /> </button>
                <button className="btn btn-outline-secondary">Login With <img src={google} alt="" /> </button>
            </div>
        </form>
    );
};

export default Login;