import React from 'react'
import { useSelector } from 'react-redux';
import UserLogo from '../Assets/ic_user.png'
import { logoutUser } from '../Redux/authActions';
const UserPage = () => {
    const { user } = useSelector(
        (state) => state.user
    );
    const submitHandler = async (e) => {
        e.preventDefault();

        await dispatch(logoutUser())
        dispatch(getMyProfile())
    }
    return (
        <div className='authFormContainer'>

            <div className='authForm'>
                <div className='imageDiv'>
                    <img src={UserLogo} alt="" />
                </div>
                <h1>Welcome! {`${user.username}`} </h1>
                <button type='submit' onClick={submitHandler} className={loading ? "loadingButton" : "notLoadingButton"} >{loading ? "...Loading" : "Logout"}</button>
            </div>
        </div>
    )
}

export default UserPage