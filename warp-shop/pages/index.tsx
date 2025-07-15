// pages/index.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">WARP SHOP</h1>
      <p className="mt-2 text-gray-600">ร้านสุ่มสินค้า + เติมเงิน TrueMoney</p>
      <div className="mt-4 space-x-4">
        <Link href="/login" className="text-blue-500 underline">เข้าสู่ระบบ</Link>
        <Link href="/register" className="text-blue-500 underline">สมัครสมาชิก</Link>
      </div>
    </div>
  )
}
