import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/user/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/checkin');
    } catch (err) {
      console.error(err.response.data);
      alert('Login failed');
    }
  };

  return (
    <div class="container">
      <div class="screen">
		<div class="screen__content">
      
      <form class="login" onSubmit={onSubmit}>
      <div class="login__field">
					<i class="login__icon fas fa-user"></i>
          <input type="email" class="login__input" name="email" placeholder='Email' value={email} onChange={onChange} required />
        </div>
        <div class="login__field">
					<i class="login__icon fas fa-lock"></i>
          <input type="password" class="login__input" name="password" placeholder='Password' value={password} onChange={onChange} required />
        </div>
        <button class="button login__submit" type="submit"><span class="button__text">Log In Now</span>
        <i class="button__icon fas fa-chevron-right"></i></button>
      </form>
       <p>
        New user? <a href="/register">Register</a>
      </p>
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

export default Login;
