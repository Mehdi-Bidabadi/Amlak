import styles from "@/components/layout/Footer.module.css"
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.desc}>
                <h3>سامانه خرید و اجاره ملک</h3>
                <p>اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود</p>
            </div>
            <div>
                <ul>
                    <li>تعرفه قانونی</li>
                    <li>دسترسی سریع</li>
                    <li>مشاورین خبره</li>
                    <li>قولنامه محضری</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer