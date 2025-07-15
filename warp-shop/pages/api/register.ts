// pages/api/register.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body

  const { data: exist } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)
    .single()

  if (exist) {
    return res.json({ success: false, message: 'มีชื่อผู้ใช้นี้แล้ว' })
  }

  const { error } = await supabase.from('users').insert([
    { username, password, wallet: 0, role: 'user' }
  ])

  if (error) return res.json({ success: false, message: 'สมัครไม่สำเร็จ' })
  return res.json({ success: true })
}
