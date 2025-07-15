// pages/api/truewallet.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { gift_link, username } = req.body
  const result = await axios.post('https://www.planariashop.com/api/truewallet.php', {
    keyapi: 'd539591be822272c0e8aa05b9f3c40a3',
    phone: '0985074608',
    gift_link,
  })

  const amount = result?.data?.amount
  if (amount) {
    // TODO: อัปเดตยอดเงินผู้ใช้ใน DB
    return res.json({ success: true, amount })
  } else {
    return res.json({ success: false, message: 'เติมเงินไม่สำเร็จ' })
  }
}
