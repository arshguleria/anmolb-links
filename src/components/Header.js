import { IcMInstagramLogo, IcMLinkedinLogo, IcMTwitter } from '@cogoport/icons-react'
import styles from './styles.module.css'

function Header () {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
       <div className={styles.avatar}></div>
            <div className={styles.title_container}>
              <div className={styles.title}>Anmol Bansal </div>
              <div className={styles.subtitle}>Software Engineer | Some Content</div>
            </div>
      </div>

            <div className={styles.social}>
                <IcMInstagramLogo height={32} width={32}/>
                <IcMTwitter height={32} width={32}/>
                <IcMLinkedinLogo height={32} width={32}/>
            </div>
    </div>
  )
}

export default Header
