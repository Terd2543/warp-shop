// pages/api/auth.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)
    .eq('password', password)
    .single()

  if (data) {
    res.setHeader('Set-Cookie', `username=${username}; Path=/; HttpOnly`)
    return res.json({ success: true, role: data.role })
  } else {
    return res.json({ success: false, message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' })
  }
}
