// pages/register.tsx
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Register() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegister = async () => {
    const res = await axios.post('/api/register', { username, password })
    if (res.data.success) router.push('/login')
    else setError(res.data.message)
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">สมัครสมาชิก</h1>
      <input className="mt-2 w-full p-2 border" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" className="mt-2 w-full p-2 border" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister} className="mt-4 w-full bg-green-500 text-white p-2">สมัคร</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}
