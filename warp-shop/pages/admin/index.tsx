// pages/admin/index.tsx
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function AdminPanel() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/api/admin/users').then(res => setUsers(res.data))
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">แอดมิน: ผู้ใช้ทั้งหมด</h1>
      <ul className="mt-4 space-y-2">
        {users.map((u: any) => (
          <li key={u.id} className="border p-2">
            {u.username} - ยอดเงิน: {u.wallet} บาท
          </li>
        ))}
      </ul>
    </div>
  )
}
