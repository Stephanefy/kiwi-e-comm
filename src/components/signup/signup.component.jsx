import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfilDocument} from '../../firebase/firebase.utils';

import './signup.style.scss';


export default class Signup extends React.Component {

    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }


    handleSubmit = async event => {
        event.preventDefault();
        
        const {displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword) {
            alert("le mot de passe ne correspond pas");
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfilDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(error) {
            console.error(error)
        }
        
    }


    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2 className='title'>créer un nouveau compte</h2>
                <span>S'enregistrer avec un email et un mot de passe</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Nom'
                        required
                    />
                        <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                        <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Mot de passe'
                        required
                    />
                        <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirmation du mot de passe'
                        required
                    />    
                    <CustomButton type="submit"> S'enregistrer</CustomButton>            
                </form>
            </div>
        )
    }



   
}


