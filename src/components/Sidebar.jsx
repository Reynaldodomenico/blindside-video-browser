import React from "react";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="shortcut-links">
                <a href=""><img src={require('../images/home.png')} /><p>Home</p></a>
                <a href=""><img src={require('../images/explore.png')} /><p>Explore</p></a>
                <a href=""><img src={require('../images/subscriprion.png')} /><p>Subscription</p></a>
                <a href=""><img src={require('../images/library.png')} /><p>Library</p></a>
                <a href=""><img src={require('../images/history.png')} /><p>History</p></a>
                <a href=""><img src={require('../images/playlist.png')} /><p>Playlist</p></a>
                <a href=""><img src={require('../images/messages.png')} /><p>Messages</p></a>
                <a href=""><img src={require('../images/show-more.png')} /><p>Show More</p></a>
                <hr />
            </div>
        </div>
    );
}