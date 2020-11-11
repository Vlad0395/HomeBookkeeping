import React, { useState } from 'react';
import { useStore } from '../../stores/store';

export const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {userStore} = useStore();
  const onChangedName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const onChangedPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const sendData = () => {
    const data = {
      username: userName,
      password: password,
    };
    console.log('data', data);
    console.log('UserStore', userStore);
    userStore!.login(data);
  };
  return (
    <div>
      <input type='text' value={userName} onChange={onChangedName}></input>
      <input type='password' value={password} onChange={onChangedPass}></input>
      <button onClick={sendData}>Send</button>
    </div>
  );
};


