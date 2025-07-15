// pages/api/admin/users.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data, error } = await supabase
    .from('users')
    .select('id, username, wallet, role')

  if (error) return res.status(500).json({ error: 'โหลดข้อมูลล้มเหลว' })
  return res.json(data)
}
