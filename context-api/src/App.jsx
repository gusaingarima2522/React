import React  from 'react';
import UserContextprovider from './context/UserContextprovider';
import Login from './components/Login'
import Profile from './components/Profile';

export default function App(){
  return(
    <UserContextprovider>
      <h1 className='items-center text-2xl bg-blue-300'>heyyyyy</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextprovider>
  )
}