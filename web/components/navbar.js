import Link from 'next/link'
import styles from './navbar.module.css'

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <img src='./whiteLogo.svg' alt="KBL logo" style={{ width: 100, height: 100 }} />
            </div>
            <div className={styles.linkContainer}>
                <div className={styles.navbarLink}><Link href="/" ><a>Hem</a></Link></div>
                <div className={styles.navbarLink}><Link href="/om-oss"><a>Om oss</a></Link></div>
                <div className={styles.navbarLink}><Link href="/valpar"><a>Valpar</a></Link></div>
            </div>

        </div>
    )
}
export default Navbar