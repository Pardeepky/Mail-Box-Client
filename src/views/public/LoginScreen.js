import React from 'react'
import Signup from './Signup'
import classes from './Login.module.css'

const LoginScreen = () => {
    return (
        <>
            <div className={classes.loginWrapper}>
                <Signup />
            </div>
        </>
    )
}

export default LoginScreen