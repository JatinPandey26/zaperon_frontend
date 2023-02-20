import React from 'react'

const UserPage = ({user}) => {
    return (
        <div className='authFormContainer'>

            <div className='authForm'>
                <div className='imageDiv'>
                    <img src={UserLogo} alt="" />
                </div>

                <h1>Welcome! {user.email.split("@")[1]} </h1>

            </div>

        </div>
    )
}

export default UserPage