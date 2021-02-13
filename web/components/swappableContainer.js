import { useState } from "react"
import styles from '../styles/swappableContainer.module.scss'
import { Modal } from 'react-bootstrap/';

const SwappableContainer = ({ data }) => {

    const [active, setActive] = useState('lineage')
    const [activeImage, setActiveImage] = useState('')
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div onClick={() => setActive('lineage')} className={active === 'lineage' ? styles.activeHeader : styles.headerItem}><h1>Stamtavla</h1></div>
                    <div onClick={() => setActive('healthInformation')} className={active === 'healthInformation' ? styles.activeHeader : styles.headerItem}><h1>Veterinärdata</h1></div>
                    <div onClick={() => setActive('showcaseInformation')} className={active === 'showcaseInformation' ? styles.activeHeader : styles.headerItem}><h1>Utställning</h1></div>
                </div>
                <div className={styles.content}>{active === 'lineage' ? <img src={data.lineage} className={styles.imgContainer} onClick={() => setActiveImage(data.lineage)} />
                    : active === 'healthInformation' ? <span>{data.healthInformation}</span>
                        : active === 'showcaseInformation' ? <span>{data.showcaseInformation}</span>
                            : <></>}
                </div>
            </div>
            <Modal
                size="xl"
                centered
                show={activeImage !== ''}
                onHide={() => setActiveImage('')}
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <img src={activeImage} className="img-fluid" />
                </Modal.Body>

            </Modal >
        </>
    )
}
export default SwappableContainer