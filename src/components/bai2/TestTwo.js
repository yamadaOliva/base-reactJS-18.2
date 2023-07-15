import "./TestTwo.scss";
import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";

const TestTwo = () => {

    const [imageList, setImageList] = useState([
        {
            id: 1,
            src: "https://picsum.photos/200/300",
            width: 800,
            height: 600
        },
        {
            id: 2,
            src: "https://picsum.photos/200/300",
            width: 800,
            height: 600
        },
        {
            id: 3,
            src: "https://picsum.photos/200/300",
            width: 800,
            height: 600
        },
        {
            id: 4,
            src: "https://picsum.photos/200/300",
            width: 800,
            height: 600
        },
        {
            id: 5,
            src: "https://picsum.photos/200/300",
            width: 800,
            height: 600
        },
        {
            id: 6,
            src: "https://picsum.photos/200/300",
            width: 800,
            height: 600
        },
        {
            id: 7,
            src: "https://picsum.photos/200/300",
            width: 800,
            height: 600
        },
        {
            id: 8,
            src: "https://picsum.photos/200/300",
            width: 800,
            height: 600
        },
        {
            id: 9,
            src: "https://picsum.photos/200/300",
            width: 800,
            height: 600
        },
        {
            id: 10,
            src: "https://picsum.photos/200/300",
            width: 800,
            height: 600
        },
        {
            id: 11,
            src: "https://picsum.photos/200/300",
            width: 800,
            height: 600
        },
        {
            id: 12,
            src: "https://picsum.photos/200/300",
            width: 800,
            height: 600
        },
    ])


    return (
        <div className="bai2-container" >
            <div className="card">
                <div className="image-grid-container">
                    {
                        imageList.map((item, index) => {
                            return (
                                <div className="img-element">
                                    <img src={item.src} alt="" />
                                </div>
                            )
                        })
                    }
                    {/* <PhotoAlbum
                        layout="masonry"
                        photos={imageList}
                        columns={3}
                    /> */}
                </div>
            </div>
        </div >
    );
}

export default TestTwo;