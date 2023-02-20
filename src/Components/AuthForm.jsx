import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import UserLogo from '../Assets/ic_user.png'
import { registerUser } from '../Redux/authActions';
const AuthForm = () => {
    const [formdata, setFormData] = useState({});
    const dispatch = useDispatch();

    function handleChange(e) {
        setFormData({
            ...formdata,
            [e.target.id]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(registerUser(formdata.email, formdata.password))
    }

    return (
        <div className='authFormContainer'>

            <div className='authForm'>
                <div className='imageDiv'>
                    <img src={UserLogo} alt="" />
                </div>

                <h1>Welcome!</h1>
                <p>Let's connect to your workspace. <br /> Please enter your credentials to continue.</p>
                <form action="">
                    <input type="text" placeholder='Email Address' name='email' id='email' onChange={e => handleChange(e)} />
                    <input type="password" placeholder='Password' name="password" id="password" onChange={e => handleChange(e)} />
                </form>
                <h4>Forgot Password?</h4>
                <button type='submit' onClick={submitHandler}>Sign in</button>
            </div>

        </div>
    )
}

export default AuthForm