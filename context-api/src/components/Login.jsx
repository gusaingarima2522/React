import React,{useState,useContext} from 'react';
import UserContext from '../context/UserContext';


export default function Login(){
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const{setuser}=useContext(UserContext)
  const handleSubmit = (e) => {
     e.preventDefault()
        setuser({username, password})
  }
  return(
    <>
    <div>
      <input
      type='text'
      value={username}
      onChange={(e)=>setusername(e.target.value)}
      placeholder='enter username'/>
      <input
      type='text'
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      placeholder='enter password'
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>

    </>
  )
}