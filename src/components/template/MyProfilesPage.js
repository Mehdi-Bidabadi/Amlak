import styles from '@/components/template/MyProfilesPage.module.css'
import DashboardCard from '../module/DashboardCard'

function MyProfilesPage({profiles}) {
  return (
    <div className={styles.text}>
        {profiles.length ? null : (
            <p>هیچ آگنهی ثبت نشده</p>
        )}
        {profiles.map(e => (
            <DashboardCard key={e._id} data={JSON.parse(JSON.stringify(e))} />
        ))}
    </div>
  )
}

export default MyProfilesPage