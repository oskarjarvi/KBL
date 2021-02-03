import Link from 'next/link'
import styles from './navbar.module.css'
import Image from 'next/image'

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <Image src="/whiteLogo.svg" alt="KBL logo" height="100" width="180" />
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