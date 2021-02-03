import client from '../client'
import { useEffect, useState } from 'react'
import styles from './component.module.css'


const Footer = () => {
    const query = '*[_type == "contactInfo"]'
    const [data, setData] = useState(null)

    useEffect(() => {
        client.fetch(query).then(info => {
            setData(info[0])
        })
    }, [])
    return (
        <div className={styles.footer}>
            <div className={styles.informationSection}>
                <h1>Kontakt</h1>
                <div className={styles.informationContent}>
                    <p>Pia Mårtensson</p>
                    {data && <>
                        <p>{data.adress}</p>
                        <p>Mobil:+{data.tel}</p>
                        <p>Email:{data.email}</p>
                    </>}
                </div>


            </div>
            <div className={styles.informationSection}>
                <h1>Länkar</h1>
                <div className={styles.linkContainer}>
                    {data && data.links.map((link, i) => {
                        return (
                            <a key={i} href={link.href} className={styles.link}>{link.title}</a>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}


export default Footer