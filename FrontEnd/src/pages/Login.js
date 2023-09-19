import React, { useState } from 'react';
import styles from './Login.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useNavigate를 import 합니다

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // errorMessage 상태를 추가합니다
  const navigate = useNavigate(); // useNavigate를 선언합니다

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email, 
      password,
    };

    try {
      const response = await axios.post('http://192.168.100.38:3000/user/login', userData);
      
      if (response.status === 200) {
        console.log(response)
        console.log(response.data.name)
        // 아이디 들고 다니면 편하다
        const { token, name, id } = response.data; // response에서 token, name, id를 가져옵니다
        localStorage.setItem('token', token); // token을 localStorage에 저장합니다
        localStorage.setItem('name', name); // name을 localStorage에 저장합니다
        localStorage.setItem('userId', id); // id를 localStorage에 저장합니다 
        navigate('/'); // 메인 페이지로 이동합니다
        window.location.reload(); // 페이지를 리로드합니다
      } else {
        setErrorMessage('로그인 중 오류가 발생했습니다'); // 오류 메시지를 설정합니다
      }

    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('로그인 중 오류가 발생했습니다'); // 네트워크 오류 또는 기타 오류가 발생하면 오류 메시지를 설정합니다
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>Login</h2>
        {errorMessage && <p>{errorMessage}</p>} {/* errorMessage가 있으면 표시합니다 */}
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
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
