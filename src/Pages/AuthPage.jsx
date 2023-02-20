import React, { Fragment } from 'react'
import AuthForm from '../Components/AuthForm'
import Footer from '../Components/Footer'

const AuthPage = () => {
    return (
        <Fragment>
            <div className='authPage'>
                <AuthForm />
            </div>
            <Footer />
        </Fragment>
    )
}

export default AuthPage