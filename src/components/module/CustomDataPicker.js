import styles from "@/components/module/CustomDataPicker.module.css";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"


function CustomDataPicker({profileData, setProfileData}) {

    const changeHandler = (e) => {
        const data = new Date(e);
        console.log(data);
        setProfileData({...profileData, constructionData: data})

    }
    return (
        <div className={styles.container}>
            <p>تاریخ ساخت</p>
            <DatePicker
                calendar={persian}
                locale={persian_fa}
                value={profileData.constructionData}
                onChange={changeHandler}
            />
        </div>
    )
}

export default CustomDataPicker