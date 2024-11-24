import styles from "@/components/template/DetailsPage.module.css";
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck, BiStore } from "react-icons/bi";
import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { e2p } from "@/utils/replaceNumber";
import Shared from "../module/Shared";

function DetailsPage({data: {title, location, description, amenities, rules, realState, phone, price, category, constructionDate}}) {
    
    const categories = {
        apartment: "آپارتمان",
        villa: "ویلا",
        store: "مغازه",
        office: "دفتر",
      };

    const icons = {
        villa: <RiHome3Line />,
        apartment: <MdApartment />,
        store: <BiStore />,
        office: <GiOfficeChair />,
      };
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <h1>{title}</h1>
            <span>
                <HiOutlineLocationMarker />
                {location}
            </span>
            <h3 className={styles.title}>توضیحات</h3>
            <p>{description}</p>
            <h3 className={styles.title}>امکانات</h3>
            {amenities.length ? (<ul>{amenities.map((e, index) =>(
                <li key={index}>{e}</li>
            ) )}</ul>) : (<p>هیچ موردی ذکر نشده است</p>)}

            <h3 className={styles.title}>قوانین</h3>
            {rules.length ? (<ul>{rules.map((e, index) =>(
                <li key={index}>{e}</li>
            ) )}</ul>) : (<p>هیچ موردی ذکر نشده است</p>)}

        </div>
        <div className={styles.sidebar}>
            <div className={styles.reaState}>
                <SiHomebridge />
                <p>املاک{realState}</p>
                <span>
                    <AiOutlinePhone />
                    {e2p(phone)}
                    </span>
            </div>
            <Shared />
            <div className={styles.price}>
                <p>
                    {icons[category]}
                    {categories[category]}
                </p>
                <p>{price} تومان</p>
                <p>
                    <BiCalendarCheck />
                    {new Date(constructionDate).toLocaleDateString("fa-IR")}
                </p>
            </div>
        </div>
    </div>
  )
}

export default DetailsPage