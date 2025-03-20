import React from 'react'
import { useState } from 'react';
import "../style.css"

const Form = () => {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [errorUsername,setErrorUsername] = useState('');
    const [errorEmail,setErrorEmail] = useState('');
    const [errorPassword,setErrorPassword] = useState('');
    const [errorConfirmPassword,setErrorConfirmPassword] = useState('');

    const [userColor, setUserColor] = useState('');
    const [emailColor, setEmailColor] = useState('');
    const [passwordColor, setPasswordColor] = useState('');
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('');

  return (
  <div>

  </div>
  )
};

export default Form;