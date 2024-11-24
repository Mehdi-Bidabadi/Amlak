import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import styles from "@/components/layout/DashboardSidebar.module.css";
import { getServerSession } from "next-auth";
import Link from "next/link";
import {CgProfile} from "react-icons/cg"
import LogoutButton from "../module/LogoutButton";

async function DashboardSidebar({children, email, role}) {
    const session = await getServerSession(authOptions)
    console.log(session);
  return (
    <div className={styles.container}>
        <div className={styles.sidebar}>
            <CgProfile />
            {role === "ADMIN" ? "admin" : null}
            <p>{session.user.email}</p>
            <span></span>
            <Link href="/dashboard">حساب کاربری</Link>
            <Link href="/dashboard/my-profiles">آگهی های من</Link>
            <Link href="/dashboard/add">ثبت آگهی</Link>
            {role === "ADMIN" ? (<Link href="/admin">در حال انتشار</Link>) : null}
            <LogoutButton />
        </div>
        <div className={styles.main}>{children}</div>
    </div>
  )
}

export default DashboardSidebar