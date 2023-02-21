import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserLogo from '../Assets/ic_user.png'
import { getMyProfile, logoutUser } from '../Redux/authActions';
const UserPage = () => {
    const { user, loading } = useSelector(
        (state) => state.user
    );
    const dispatch = useDispatch();

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