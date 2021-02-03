import { useEffect, useState } from 'react'
import client from '../client'
import styles from './component.module.css'
import ReviewModal from './reviewModal'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image'



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};
const CustomArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        direction,
        carouselState: { currentSlide, deviceType }
    } = rest;
    if (direction === 'right') {
        return <button style={{ position: 'absolute', right: -5, border: 0, width: 50, height: 50, zIndex: 90000, backgroundColor: 'transparent' }} ><Image src="/blueRight.svg" alt="rightArrow" color={'red'} layout="fill" onClick={() => onClick()} /></button>
    }
    if (direction === 'left') {
        return <button style={{ position: 'absolute', left: -5, border: 0, width: 50, height: 50, zIndex: 90000, backgroundColor: 'transparent' }} ><Image src="/blueLeft.svg" alt="leftArrow" color={'red'} layout="fill" onClick={() => onClick()} /></button>

    }
};

const Reviews = (props) => {
    const [data, setData] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        client.fetch('*[_type == "review"]').then(res => setData(res))
    }, [])

    return (
        <>
            <div className={styles.reviewSection}>
                <h1 className={styles.sectionHeader} style={{ color: '#57a2ae' }}>{props.data.heading}</h1>
                <div className={styles.reviewContent}>
                    <Carousel
                        responsive={responsive}
                        showDots={false}
                        ssr
                        containerClass="container"
                        itemClass="image-item"
                        customLeftArrow={<CustomArrow direction='left' />}
                        customRightArrow={<CustomArrow direction='right' />}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        centerMode>
                        {data.map((item, i) => (
                            <div key={i} className={styles.reviewItem}>
                                <h1 style={{ color: '#57a2ae', fontSize: 30 }}>{item.name}</h1>
                                <p>{item.reviewMessage}</p>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <p onClick={() => setShowModal(true)} className={styles.blueText} style={{ fontSize: 20 }}>Klicka här för att lämna ett omdöme</p>

            </div>
            <ReviewModal show={showModal} onHide={() => setShowModal(false)} />
        </>
    )
}
export default Reviews