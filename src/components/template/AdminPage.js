import styles from "@/components/template/AdminPage.module.css"
import AdminCard from "../module/AdminCard";
function AdminPage({ profiles }) {
    return (
        <div>
            {
                profiles.length ? null : (<p className={styles.text}>هیچ آگهی در انتظار تایید وجود ندارد</p>)
            }
            {profiles.map((i) => (
                <AdminCard key={i._id} data={i} />
            ))}
        </div>
    )
}

export default AdminPage;