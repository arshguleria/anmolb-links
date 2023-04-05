/* eslint-disable camelcase */
import {
  IcMInstagramLogo,
  IcMLinkedinLogo,
  IcMTwitter
} from '@cogoport/icons-react'
import styles from './styles.module.css'
import { HEADER } from '../content'

function Header () {
  const {
    profile_url = '',
    profile_alt = '',
    heading = '',
    sub_heading = '',
    links = {}
  } = HEADER

  const width = 30
  const height = 30

  const LINKS_MAPPING = {
    instagram: <IcMInstagramLogo width={width} height={height} />,
    linkedin: <IcMLinkedinLogo width={width} height={height} />,
    twitter: <IcMTwitter width={width} height={height} />
  }

  return (
        <div className={styles.header}>
            <div className={styles.header_left}>
                <div className={styles.avatar}>
                    <img src={profile_url} alt={profile_alt}></img>
                </div>

                <div className={styles.title_container}>
                    <div className={styles.title}>{heading}</div>
                    <div className={styles.subtitle}>{sub_heading}</div>
                </div>
            </div>

            <div className={styles.social}>
                {Object.keys(links).map((key, index) => (
                    <a href={links[key]} alt={key} key={key}>
                        {LINKS_MAPPING[key]}
                    </a>
                ))}
            </div>
        </div>
  )
}

export default Header
