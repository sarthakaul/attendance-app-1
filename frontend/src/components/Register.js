import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNo: '',
    password: '',
  });

  const { name, email, rollNo, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/user/register', formData);
      console.log(res.data);
      alert('Registration successful');
    } catch (err) {
      console.error(err.response.data);
      alert('Registration failed');
    }
  };

  return (
    <div class="container">
      <div class="screen">
		<div class="screen__content">
      <h1>Register</h1>
      <form class="login" onSubmit={onSubmit}>
        <div class="login__field">
          
          <input type="text" class="login__input" name="name" placeholder="Name" value={name} onChange={onChange} required />
        </div>
        <div class="login__field">
         
          <input type="email" class="login__input" name="email" placeholder="Emaail" value={email} onChange={onChange} required />
        </div>
        <div class="login__field">
         
          <input type="text" class="login__input" name="rollNo" placeholder="Rollno" value={rollNo} onChange={onChange} required />
        </div>
        <div class="login__field">
          
          <input type="password" class="login__input" name="password" placeholder="Password" value={password} onChange={onChange} required />
        </div>
        <button class="button login__submit" type="submit"><span class="button__text">Register</span>
        <i class="button__icon fas fa-chevron-right"></i></button>
      </form>
    </div>
    
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>	
    </div>
    </div>
  );
};

export default Register;
