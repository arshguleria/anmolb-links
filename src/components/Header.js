/* eslint-disable camelcase */
import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa'
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

  const size = 30

  const LINKS_MAPPING = {
    instagram: <FaInstagram size={size} />,
    linkedin: <FaLinkedinIn size={size} />,
    twitter: <FaTwitter size={size} />,
    github: <FaGithub size={size} />
  }

  return (
        <div className={styles.header}>
            <div className={styles.header_left}>
                <div className={styles.avatar}>
                    <img src={profile_url} alt={profile_alt}></img>
                </div>

                <div>
                    <div className={styles.title}>{heading}</div>
                    <div className={styles.subtitle}>{sub_heading}</div>
                </div>
            </div>

            <div className={styles.social}>
                {Object.keys(links).map((key, index) => (
                    <a href={links[key]} alt={key} key={key} target='_blank' rel='noreferrer'>
                        {LINKS_MAPPING[key]}
                    </a>
                ))}
            </div>
        </div>
  )
}

export default Header
