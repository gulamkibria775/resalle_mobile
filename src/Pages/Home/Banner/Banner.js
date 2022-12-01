import React from 'react';

import BannerItem from './BannerItem';

const bannerData = [
    {
        image: "https://fdn.gsmarena.com/imgroot/news/21/04/huawei-p50-renders/-1200/gsmarena_003.jpg",
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p50-1.jpg",
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: "https://thumbs.dreamstime.com/b/apple-iphone-purple-color-screen-smart-phone-ios-back-side-high-quality-touch-world-technology-kyiv-ukraine-may-217688529.jpg",
        prev: 2,
        id: 3,
        next: 1
    },
    // {
    //     image: img4,
    //     prev: 3,
    //     id: 4,
    //     next: 5
    // },
    // {
    //     image: img5,
    //     prev: 4,
    //     id: 5,
    //     next: 6
    // },
    // {
    //     image: img6,
    //     prev: 5,
    //     id: 6,
    //     next: 1
    // }
]

const Banner = () => {
    return (
        <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
            
        </div>
    );
};

export default Banner;