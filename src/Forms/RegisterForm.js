import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import './Style.css';

export const RegisterForm = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        City: '',
        Password: '',
        ConfirmPassword: '',
    });
    const[error,setError]=useState({})
    const [showPassword, setShowPassword] = useState(false);

    const handleData = (event) => {
        const { name, value } = event.target;
        setFormData((prevValue) => ({
            ...prevValue,
            [name]: value
        }));
    };
    
    
    const validateData = () => {
        let isValid = true;
        const newError = {};
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (formData.Name.trim() === '') {
            newError.Name = 'Name is Required';
            isValid = false;
        }

        if (formData.Email.trim() === '') {
            newError.Email = 'Email is Required';
            isValid = false;
        } else if (!emailRegex.test(formData.Email.trim())) {
            newError.Email = 'Invalid Email';
            isValid = false;
        }

        if (formData.City.trim() === '') {
            newError.City = 'City is Required';
            isValid = false;
        }

        if (formData.Password.trim() === '') {
            newError.Password = 'Password is Required';
            isValid = false;
        }

        if (formData.ConfirmPassword.trim() === '') {
            newError.ConfirmPassword = 'Confirm Password is Required';
            isValid = false;
        }

        if (formData.Password !== formData.ConfirmPassword) {
            newError.ConfirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setError(newError);

        return isValid;
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevPassword) => !prevPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateData()) {
            console.log('Form Data Submitted:', formData);
        } else {
            setTimeout(() => {
                setError('');
            }, 2000);
        }
    };

    return (
        <React.Fragment>
            <div className="cont-1">
                <div className="Register-form p-3 shadow">
                    <h3 className="mb-3 text-center">Signup Form</h3>
                    <div className="mb-3">
                        <Link to="/Login" type='button' className="LoginButton">
                            Login
                        </Link>
                        <button  type='button' className="SingupButton" >
                            Signup
                        </button>
                    </div>

                    <form>
                        <div className="form-group mb-4">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Enter Name"
                                value={formData.Name || ''}
                                onChange={handleData}
                                name="Name"
                            />
                            {error.Name && <p className="error-message">{error.Name}</p>}
                        </div>

                        <div className="form-group mb-4">
                            <input
                                className="form-control"
                                placeholder="Enter Email"
                                value={formData.Email || ''}
                                onChange={handleData}
                                name="Email"
                            />
                            {error.Email && <p className="error-message">{error.Email}</p>}
                        </div>

                        <div className="form-group mb-4">
                            <select
                                className="form-control"
                                value={formData.City || ''}
                                onChange={handleData}
                                name="City"
                            >
                                <option value="" disabled>
                                    Select City
                                </option>
                                <option value={'Nagpur'}>Nagpur</option>
                                <option value={'Mumbai'}>Mumbai</option>
                                <option value={'Delhi'}>Delhi</option>
                                <option value={'Calcutta'}>Calcutta</option>
                                <option value={'Gondia'}>Gondia</option>
                            </select>
                            {error.City && <p className="error-message">{error.City}</p>}
                        </div>

                        <div className="form-group mb-4">
                            <input
                                className="form-control"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter Password"
                                value={formData.Password || ''}
                                onChange={handleData}
                                name="Password"
                            />
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                className="eye-icon"
                                onClick={togglePasswordVisibility}
                            />
                            {error.Password && <p className="error-message">{error.Password}</p>}
                        </div>

                        <div className="form-group mb-4">
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Enter Confirm password"
                                value={formData.ConfirmPassword || ''}
                                onChange={handleData}
                                name="ConfirmPassword"
                            />
                            {error.ConfirmPassword && (
                                <p className="error-message">{error.ConfirmPassword}</p>
                            )}
                        </div>

                        <button type="submit" className="signupButton" onClick={handleSubmit}>
                            Signup
                        </button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};
