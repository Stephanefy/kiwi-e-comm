import React from 'react';

import Signin from '../../components/sign-in/signIn.component';
import Signup from '../../components/signup/signup.component';

import './sign-in-and-sign-up.style.scss';


const SignInAndSignUpPage = () => {
    return (
    <div className="sign-in-and-sign-up">
        <Signin />
        <Signup />
    </div>
    )
}

export default SignInAndSignUpPage