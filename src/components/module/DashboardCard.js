"use client"
import styles from '@/components/module/DashboardCard.module.css'
import Card from '@/components/module/Card'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast';

function DashboardCard({data}) {
  console.log(data);

  const router = useRouter();

  const editeHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`)
  }

  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    })
    const response = await res.json();
    if (response.error) {
      toast.error(response.error)
    }else{
      toast.success(response.message)
      router.refresh()
    }
  }
  return (
    <div className={styles.container}>
        <Card data={data} />
        <div className={styles.main}>
          <button onClick={editeHandler}>ویرایش</button>
          <button onClick={deleteHandler}>حذف آگهی</button>
        </div>
        <Toaster />
    </div>
  )
}

export default DashboardCard