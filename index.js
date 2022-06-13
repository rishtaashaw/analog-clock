

function rot() {
    var d = new Date();
    var mtime = d.getMinutes();
    var stime = d.getSeconds();
    var htime = d.getHours();
    if (htime > 12) {
        htime = d.getHours() - 12;
    }
    hrotation = htime * 30 + mtime / 2;
    mrotation = mtime * 6;
    srotation = stime * 6;
    document.querySelector(".hour").style.transform = "rotate(" + hrotation + "deg)";
    document.querySelector(".minute").style.transform = "rotate(" + mrotation + "deg)";
    document.querySelector(".second").style.transform = "rotate(" + srotation + "deg)";//yha space nhi dena tha rotate k bad
}
setInterval(() => {
    rot();
}, 1000);