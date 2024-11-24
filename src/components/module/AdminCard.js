import styles from "@/components/module/AdminCard.module.css";
function AdminCard({data}) {
  return (
    <div className={styles.container}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className={styles.properties}>
            <span>{data.location}</span>
            <span>{data.price}</span>
        </div>
        <button>انتشار</button>
    </div>
  )
}

export default AdminCard