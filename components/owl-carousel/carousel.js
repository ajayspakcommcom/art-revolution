
import React, { useEffect, useState } from 'react';
import LeftArrowIcon from '../icons/left-arrow-icon';
import RightArrowIcon from '../icons/right-arrow-icon';
import classes from './carousel.module.css';
import { getAllCarousel } from '../../data/carousel';
import CarouselItem from './carousel-item';

const Carousel = (props) => {

    const arrBannerListImage = getAllCarousel();
    const [bannerListImage, setBannerListImage] = useState(arrBannerListImage.slice(0, 4));
    const [showNextBtn, setShowNextBtn] = useState(true);
    const [showPrevBtn, setShowPrevBtn] = useState(false);

    const showPrevImageHandler = () => {
        if (bannerListImage) {
            const firstArrElemPos = arrBannerListImage.findIndex((item, indx, arr) => {
                return item.id == bannerListImage.at(0).id;
            });

            const lastArrElemPos = arrBannerListImage.findIndex((item, indx, arr) => {
                return item.id == bannerListImage.at(-1).id;
            });
            setBannerListImage(arrBannerListImage.slice(firstArrElemPos - 1, lastArrElemPos - 0));

            if (firstArrElemPos == 1) {
                setShowPrevBtn(false);
            } else {
                setShowPrevBtn(true);
            }

            if (lastArrElemPos <= (arrBannerListImage.length - 1)) {
                setShowNextBtn(true);
            } else {
                setShowNextBtn(false);
            }

        }
    };

    const showNextImageHandler = () => {

        if (bannerListImage) {

            const firstArrElemPos = arrBannerListImage.findIndex((item, indx, arr) => {
                return item.id == bannerListImage.at(0).id;
            });

            const lastArrElemPos = arrBannerListImage.findIndex((item, indx, arr) => {
                return item.id == bannerListImage.at(-1).id;
            });
            setBannerListImage(arrBannerListImage.slice(firstArrElemPos + 1, lastArrElemPos + 2));

            if (firstArrElemPos >= 0) {
                setShowPrevBtn(true);
            } else {
                setShowPrevBtn(false);
            }

            if ((arrBannerListImage.length - 2) == lastArrElemPos) {
                setShowNextBtn(false);
            } else {
                setShowNextBtn(true);
            }
        }
    };

    useEffect(() => {

    }, [])

    return (
        <div className={classes.carousel}>
            {showPrevBtn && <div className={classes.leftbtn}><LeftArrowIcon onShowPrevImage={showPrevImageHandler} /></div>}
            {showNextBtn && <div className={classes.rightbtn}><RightArrowIcon onShowNextImage={showNextImageHandler} /></div>}
            <div className={classes.carouselItem}>{bannerListImage.map(item => <CarouselItem key={item.id} data={item} />)}</div>
        </div>
    );
}

export default Carousel;
