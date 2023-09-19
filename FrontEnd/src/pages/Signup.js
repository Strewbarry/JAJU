import React, { useState } from 'react';
import styles from './Signup.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useNavigate를 임포트합니다

function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhonenumber] = useState(''); 
  const [message, setMessage] = useState(''); 

  const navigate = useNavigate(); // navigate 객체를 얻습니다

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      name,
      password,
      phonenumber, 
    };

    try {
      const response = await axios.post('http://192.168.100.38:3000/user/signup', userData);
      
      if (response.status === 200) {
        alert('회원가입이 완료되었습니다'); 
        navigate('/login'); // /login 경로로 리디렉션합니다
      } else {
        setMessage('회원가입 중 오류가 발생했습니다'); 
      }

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
      setMessage('회원가입 중 오류가 발생했습니다'); 
    }
  };

  return (
    <div className={styles.signupContainer}>
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <h2>Signup</h2>
        {message && <p>{message}</p>} 
        <div className={styles.inputField}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputField}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputField}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputField}>
          <label>Phone Number</label>
          <input
            type="tel"
            value={phonenumber} 
            onChange={(e) => setPhonenumber(e.target.value)} 
            pattern="\d*"
            title="Please enter numbers only"
            required
          />
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
