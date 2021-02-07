import { useEffect, useState } from 'react'
import client from '../client'
import styles from './component.module.css'
import ReviewModal from './reviewModal'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }

};

const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
        carouselState: { currentSlide, totalItems, slidesToShow }
    } = rest;
    let prevSlides = currentSlide === 0 ? '0.3' : '1'
    let nextSlides = currentSlide === totalItems - slidesToShow ? '0.3' : '1'
    return (
        <div className="carousel-button-group">
            <button className={styles.leftButton}><img src="/blueLeft.svg" alt="leftArrow" style={{ opacity: prevSlides, width: '100%', height: '100%', objectFit: 'contain' }} onClick={() => previous()} /></button>
            <button className={styles.rightButton} ><img src="/blueRight.svg" alt="rightArrow" style={{ opacity: nextSlides, width: '100%', height: '100%', objectFit: 'contain' }} onClick={() => next()} /></button>
        </div>
    );
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
                        arrows={false}
                        customButtonGroup={<ButtonGroup />}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        renderButtonGroupOutside
                        itemClass='test'>
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