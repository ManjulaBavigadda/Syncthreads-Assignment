import React, { useEffect, useState } from 'react'
import './Login.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { login1 } from '../Redux/action'
import { useDispatch , useSelector} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
 const username=useSelector((state)=>state.Map.userId)

  console.log(username)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const login = () => {
    axios.post('https://syncthreads.herokuapp.com/login', user).then((res) => {
      console.log(res.data)
      dispatch(login1(res.data.user.name))
      toast(`Successfully Logged In `,{
        type:"success"
      })
    setTimeout(()=>{
      navigate('/')
  },3000)

        // navigate("/")
 
    }).catch(function(err){
      toast("Invalid Credential",{
        type:"error"
    })
    })
  }


  return (
    <div className="login">
      <ToastContainer />
      <h1 >Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
     
        {' '}
        <div className='button-log' onClick={()=>{login()}}>
         Login
        </div>
  

      <div className='or_name' >OR</div>
      <Link to="/register" className='link' >
        <div className ="button-res" >
          Register
        </div>
      </Link>
      
    </div>
   
  )
}

export default Login ;
