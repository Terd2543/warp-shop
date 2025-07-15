// pages/api/user.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const username = req.cookies.username
  if (!username) return res.status(401).json({ error: 'ไม่ได้ล็อกอิน' })

  const { data, error } = await supabase
    .from('users')
    .select('wallet')
    .eq('username', username)
    .single()

  if (error) return res.status(500).json({ error: 'ดึง wallet ไม่สำเร็จ' })
  return res.json(data)
}
