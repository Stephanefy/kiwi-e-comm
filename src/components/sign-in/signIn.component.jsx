import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle} from '../../firebase/firebase.utils';

import './signin.style.scss'

export class SignIn extends Component {

    constructor(props){
        super()


        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        
        this.setState({email:'', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }


    render() {
        return (
            <div className='sign-in'>
                <h2>déjà inscrit </h2>
                <span>Connectez-vous avec votre email et mot de passe</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type="email" value={this.state.email} required handleChange={this.handleChange} label='email'/>
                    <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='password'/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                   
                </form>
            </div>

        
        )
    }
}

export default SignIn
