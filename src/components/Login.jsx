import React from 'react';
import loginImg from '../assets/login.jpeg';

const Login = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div className='hidden sm:block'>
            <img src={loginImg} alt="" />
        </div>

        <div>
            <form>
                <h2>BRAND.</h2>
                <div>
                    <label>Username</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password"/>
                </div>
                <button>Sign In</button>
                <div>
                    <p><input type="checkbox"/>Remember Me</p>
                    <p>Create an account</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login