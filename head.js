/*
toggle between adding and removing "responsive" class to "navBar" on user click.
*/

function navFunction(){
    var nav = document.getElementById("navBar");
    if (nav.className === "topNavBar") {
        nav.className += " responsive";
    } else {
        nav.className = "topNavBar";
    }
}