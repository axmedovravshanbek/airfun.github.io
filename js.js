var date = new Date();
var h = date.getHours(); // 0 - 23
var m = date.getMinutes(); // 0 -
h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
const time = h + ":" + m ;

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function pageswitch(item, name) {
    document.getElementById("bsb1").style.display="none"
    document.getElementById("bsb2").style.display="none"
    document.getElementById("bsb3").style.display="none"
    document.getElementById("bsb4").style.display="none"
    document.getElementById(item).style.display="block"
    document.getElementById("activityname").innerHTML = name;
    document.getElementById("cl").innerHTML = time;
}