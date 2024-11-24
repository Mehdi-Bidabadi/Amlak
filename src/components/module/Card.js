import { RiHome3Line } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import styles from "@/components/module/Card.module.css"
import Link from "next/link";
function Card({data: {_id, category, title, location, price}}) {
  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{price}تومان</span>
      <Link href={`/buy-residential/${_id}`}>
      مشاهده آگهی
      </Link>
    </div>
  )
}


export default Card