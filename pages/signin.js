import { useState } from 'react'
import axios from 'axios'
import MyLayout from "./component/layout"
import { useRouter } from 'next/router';

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post('http://localhost:3000/admin/signin', { email, password })
      console.log("res: "+response.data)
      
        sessionStorage.setItem('email', response.data);
        router.push('/admin/dashboard');

    } catch (error) {
        console.log("error22: "+error.message)
      setError("invalid login")
    }
  }

 

    return (
        <>
            <MyLayout title="Sign IN" />
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
      </label>
      <br />
      <label>
        Password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
      </label>
      <br />
      <button type="submit">Sign In</button>
      {error && <p >{error}</p>}
     
            </form>
            </>
  )
}
