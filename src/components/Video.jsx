import React from "react";

function displayViews(sumOfViews) {
    if (sumOfViews > 1000) {
        return (sumOfViews / 1000).toString() + "k views";
    } else {
        return sumOfViews + " views";
    }
}

export default function Video(props) {
    return (
        <div className="vid-list">
            <a href="Videoplayer.html"><img src={require(`../images/${props.thumbnail}`)} className="thumbnail" /></a>
            <div className="flex-div">
                <img src={require('../images/Jack.png')}/>
                <div className="vid-info">
                    <a href="Videoplayer.html">{props.title}</a>
                    <p>{props.channel}</p>
                    <p>{displayViews(props.view)} &bull; 2 days</p>
                </div>
            </div>
        </div>
    )
}
