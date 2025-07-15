// pages/login.tsx
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async () => {
    const res = await axios.post('/api/auth', { username, password })
    if (res.data.success) router.push('/dashboard')
    else setError(res.data.message)
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">เข้าสู่ระบบ</h1>
      <input className="mt-2 w-full p-2 border" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" className="mt-2 w-full p-2 border" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="mt-4 w-full bg-blue-500 text-white p-2">เข้าสู่ระบบ</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}
