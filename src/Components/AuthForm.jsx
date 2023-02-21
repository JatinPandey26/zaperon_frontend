import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserLogo from '../Assets/ic_user.png'
import { getMyProfile, registerUser } from '../Redux/authActions';
import toast, { Toaster } from "react-hot-toast";


const AuthForm = () => {
    const [formdata, setFormData] = useState({});
    const dispatch = useDispatch();
    const { loading, error, message } = useSelector((state) => state.user);



    function handleChange(e) {
        setFormData({
            ...formdata,
            [e.target.id]: e.target.value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        await dispatch(registerUser(formdata.email, formdata.password))
        dispatch(getMyProfile())

    }

    useEffect(() => {
        if (message) {
            toast.success(message);
            dispatch({ type: "clearMessage" });
        } else if (error) {
            toast.error(error);
            dispatch({ type: "clearError" });
        }
    }, [dispatch, message, error]);


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
                <button type='submit' onClick={submitHandler} className={loading ? "loadingButton" : "notLoadingButton"} >{loading ? "...Loading" : "Authenticate"}</button>
            </div>
        </div>
    )
}

export default AuthForm