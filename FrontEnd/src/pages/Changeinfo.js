import React, { useState } from 'react';
import axios from 'axios';

function Changeinfo() {
  const [name, setName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {};
    if(name) userData.name = name;
    if(phonenumber) userData.phonenumber = phonenumber;

    if(!Object.keys(userData).length) {
      setMessage('변경할 정보를 입력해주세요.');
      return;
    }

    const token = localStorage.getItem('token');
    if(!token) {
      setMessage('로그인이 필요합니다.');
      return;
    }

    try {
      const response = await axios.put('http://192.168.100.38:3000/user/update', userData, {
        headers: {
          authorization: token // 인증 헤더 추가
        },
      });

      if (response.status === 200) {
        setMessage('회원 정보가 성공적으로 변경되었습니다.');
      } else {
        setMessage('회원 정보 변경 중 오류가 발생했습니다.');
      }

    } catch (error) {
      console.error('Error:', error);
      if(error.response && error.response.status === 401) {
        setMessage('인증에 실패했습니다. 다시 로그인해주세요.');
      } else {
        setMessage('회원 정보 변경 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div>
      <p>회원정보 변경</p>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="변경할 이름을 입력하세요"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="변경할 전화번호를 입력하세요"
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </div>
        <button type="submit">변경하기</button>
      </form>
    </div>
  );
}

export default Changeinfo;
