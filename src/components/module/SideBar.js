import styles from "@/components/module/SideBar.module.css"
import Link from "next/link"

function SideBar() {
    const queries = [
        {villa: "ویلا"},
        {apartment: "آپارتمان"},
        {office: "دفتر"},
        {store: "مغازه"},

    ]
  return (
    <div className={styles.container}>
        <p>دسته بندی</p>
        <Link href='/buy-residential'>همه</Link>
        {queries.map((query,index) => (
            <Link key={index} href={{
                pathname: "buy-residential",
                query: {category: Object.keys(query)}
            }}>
                {Object.values(query)}
            </Link>
        ))}
    </div>
  )
}

export default SideBar