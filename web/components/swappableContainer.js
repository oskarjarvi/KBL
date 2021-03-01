import { useState } from "react"
import styles from '../styles/swappableContainer.module.scss'
import { Modal } from 'react-bootstrap/';

const SwappableDogInformationContainer = (props) => {
    const [active, setActive] = useState(props.columns[0].name)
    const [activeImage, setActiveImage] = useState('')

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    {props.columns && props.columns.map((item, i) =>
                        <div key={i} onClick={() => setActive(item.name)} className={active === item.name ? styles.activeHeader : styles.headerItem}>
                            <h1>{item.name}</h1>
                        </div>)}
                </div>
                <div className={styles.content}>
                    {props.columns && props.columns.map((item, i) => {
                        const { data } = item;
                        if (active === item.name) {
                            return item.type === 'img' ? <img key={i} src={data.url} className={styles.imgContainer} onClick={() => setActiveImage(data.url)} />
                                : item.type === 'imgNtext' ? <span>{data.content} <img src={data.url} className={styles.imgContainer} /></span> :
                                    <span key={i}>{data.content}</span>
                        }

                    })
                    }

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
export default SwappableDogInformationContainer