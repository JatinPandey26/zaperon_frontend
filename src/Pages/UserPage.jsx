import React from 'react'
import UserLogo from '../Assets/ic_user.png'
const UserPage = ({ user }) => {
    return (
        <div className='authFormContainer'>

            <div className='authForm'>
                <div className='imageDiv'>
                    <img src={UserLogo} alt="" />
                </div>

                <h1>Welcome! {user ? user.email.split("@")[1] : ""} </h1>

            </div>

        </div>
    )
}

export default UserPage