import { useState } from "react"
import styles from '../styles/swappableLitterContainer.module.scss'
import { Modal } from 'react-bootstrap/';

const SwappableLitterContainer = ({ data }) => {

    const [active, setActive] = useState('information')
    const [activeImage, setActiveImage] = useState('')
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div onClick={() => setActive('information')} className={active === 'information' ? styles.activeHeader : styles.headerItem}><h1>Information</h1></div>
                    <div onClick={() => setActive(data.mum)} className={active === data.mum ? styles.activeHeader : styles.headerItem}><h1>{data.mum}</h1></div>
                    <div onClick={() => setActive(data.dad)} className={active === data.dad ? styles.activeHeader : styles.headerItem}><h1>{data.dad}</h1></div>
                </div>
                <div className={styles.content}>{active === 'information' ?
                    <span>
                        {data.description}
                    </span>
                    : active === data.mum ?
                        <span>{data.descriptionOfMum}
                            <img src={data.imageOfMum.asset.url} className={styles.imgContainer} onClick={() => setActiveImage(data.imageOfMum.asset.url)} />
                        </span>
                        : active === data.dad ?
                            <span>{data.descriptionOfDad}
                                <img src={data.imageOfDad.asset.url} className={styles.imgContainer} onClick={() => setActiveImage(data.imageOfDad.asset.url)} />
                            </span> : <></>}

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
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <img src={activeImage} className="img-fluid" />
                    </div>
                </Modal.Body>

            </Modal >
        </>
    )
}
export default SwappableLitterContainer