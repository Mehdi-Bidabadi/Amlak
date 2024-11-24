import styles from "@/components/template/BuyResidentialsPage.module.css";
import Card from "../module/Card";
import SideBar from "../module/SideBar";

function BuyResidentialsPage({data}) {
  console.log(data, "bbbbbbbbbbbbbbbbbbbbb");
    
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}><SideBar /></div>
      <div className={styles.main}>
        {data.length ?  null : (<p className={styles.text}>هیچ آگهی ثبت نشده است</p>)}
        {data.map((i, index) => (
          <Card key={index} data={i} />
        ))}
      </div>
    </div>
  )
}

export default BuyResidentialsPage