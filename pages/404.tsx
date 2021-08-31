import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Sustom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }, [])
  return (
    <div>
      <h1 className="title-not-found">Oopss.....</h1>
      <h1 className="title-not-found">Halaman yang anda cari tidak ditemukan</h1>
    </div>
  )
}
