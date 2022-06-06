import React from "react";
import Video from "./Video";
import videos from "../data/video-detail"

// video object
// title: "Best channel to learn exervice",
// img: "thumbnail1.png",
// channel: "easy tutorials",
// views: "15k views"

// var menuIcon = document.querySelector(".menu-icon");
// var sideBar = document.querySelector(".sidebar");
// var container = document.querySelector(".container");

// menuIcon.onclick = function () {
//     sideBar.classList.toggle("small-sidebar");
//     container.classList.toggle("large-container");
// }

export default function MainPage() {
    return (
        <div className="container">
            <div className="banner">
                <img src={require('../images/banner1.png')} />
            </div>
            <div className="list-container">
                {videos.map(video => {
                    return (
                        <Video
                            key={video.id}
                            title={video.title}
                            thumbnail={video.img}
                            channel={video.channel}
                            view={video.views}
                        />
                    )
                })}
            </div>
        </div>
    );
}