// pages/dashboard.tsx
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Dashboard() {
  const [wallet, setWallet] = useState(0)

  useEffect(() => {
    axios.get('/api/user').then(res => setWallet(res.data.wallet))
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">กระเป๋าเงินของคุณ</h1>
      <p className="mt-2 text-xl text-green-600">{wallet} บาท</p>
    </div>
  )
}
