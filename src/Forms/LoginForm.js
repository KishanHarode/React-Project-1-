import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Style.css';
import login from './login.module.css';
export const LoginForm = () => {
    const[formData,setFormData]=useState({
        Name:"",
        Email:"",
        Password:""
    })
    const[error,setError]=useState({});
    const [showPassword,setShowPassword]=useState(false);
    const handleLoginData = (e)=>{
        const{name,value}=e.target;
        setFormData((prevValue)=>({
            ...prevValue,
            [name]:value
        }))
    }
    const togglePasswordVisibility = ()=>{
        setShowPassword((prevPassword)=>!prevPassword);
    }
    const validateData = ()=>{
        let isValid = true;
        const newError = {};
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(formData.Name.trim()===''){
            newError.Name="Name is Required";
            isValid=false;
        }
        
        if(formData.Email.trim()===''){
            newError.Email="Email is Required";
            isValid=false;
        }
        else if(!emailRegex.test(formData.Email.trim())){
            newError.Email="Invalid Email";
            isValid=false;
        }

        if(formData.Password.trim()===''){
            newError.Password="Password is Required";
            isValid=false;
        }
        setError(newError);
        return isValid;
    }

    const handleLoginSubmitData = (event)=>{
         event.preventDefault();
         if(validateData()){
            alert("Login is Successfull");
         }
         else{
            setTimeout(()=>{
                setError('');
            },3000)
         }
    }
    return (
        <React.Fragment>
            <div className='cont-1'>
                <div className="Login-form p-3 shadow">
                    <h3 className='mb-3 text-center'>Login Form</h3>
                    <div className='mb-3'>
                        <button type='button' className={login.LoginButton}>Login</button>
                        <Link type='button' className={login.SingUpButton} to={'/'} >Signup</Link>
                    </div>
                    <div className='form-group mb-4'>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Enter Name'
                            name='Name'
                            value={formData.Name||''}
                            onChange={handleLoginData}
                        />
                        {error.Name && <p className='error-message'>{error.Name}</p>}
                    </div>
                    <div className='form-group mb-4'>
                        <input
                            className='form-control'
                            placeholder='Enter Email'
                            name='Email'
                            value={formData.Email||''}
                            onChange={handleLoginData}
                        />
                        {error.Email && <p className='error-message'>{error.Email}</p>}
                    </div>
                    <div className='form-group mb-4'>
                        <input
                            className='form-control'
                            type={ showPassword ? 'text' : 'password'}
                            placeholder='Enter Password'
                            name='Password'
                            value={formData.Password||''}
                            onChange={handleLoginData}
                        />
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}
                         onClick={togglePasswordVisibility} className={login.eyeIcon}/>
                        {error.Password && <p className='error-message'>{error.Password}</p>}
                    </div>
                    <button type='submit' className={login.signupButton} onClick={handleLoginSubmitData}>
                        Login
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}