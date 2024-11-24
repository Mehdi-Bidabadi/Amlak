import styles from "@/components/template/HomePage.module.css";
import CategoryCard from "../module/CategoryCard";

function HomePage() {
    const services = ["خرید", "فروش", "اجاره", "رهن"];
    const cities = [
        "تهران",
        "مشهد",
        "اصفهان",
        "تبریز",
        "گیلان",
        "همدان",
        "مازندران",
        "شیراز",
    ]
  return (
    <div>
        <div className={styles.banner}>
            <div className={styles.desc}>
                <h1>سامانه خرید و اجاره ملک</h1>
                <ul>
                    {services.map((i) => (
                        <li key={i}>
                            <span>{i}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className={styles.categories}>
            <CategoryCard title="خانه ویلایی" name="villa" />
            <CategoryCard title="خانه ویلایی" name="villa" />
            <CategoryCard title="خانه ویلایی" name="villa" />
            <CategoryCard title="خانه ویلایی" name="villa" />
        </div>
        <div className={styles.city}>
            <h3>شهر های پر بازدید</h3>
            <ul>
                {cities.map((i) => (
                    <li key={i}>
                        <span>{i}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default HomePage