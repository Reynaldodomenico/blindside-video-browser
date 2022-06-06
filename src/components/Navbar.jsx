import React from "react";

var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

// function asd() {
//     sideBar.classList.toggle("small-sidebar");
//  container.classList.toggle("large-container");
// }

const asd = event => {
    // 👇️ refers to the image element
    sideBar.toggle("small-sidebar");
    container.toggle("large-container");
  };

export default function Navbar() {
    return (
        <nav className="flex-div" >
            <div className="nav-left flex-div">
                <img src={require('../images/menu.png')} className="menu-icon" onClick={asd}/>
                <img src={require('../images/logo1.png')} className="logo" />

            </div>
            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder="Search" />
                    <img src={require('../images/search.png')} />
                </div>
            </div>
            <div className="nav-right flex-div">
                <img src={require('../images/upload.png')} />
                <img src={require('../images/more.png')} />
                <img src={require('../images/notification.png')} />
                <img src={require('../images/Jack.png')} className="user-icon" />
            </div>
        </nav>
    );
}