
function makeSizer(size) {
return function() {
document.body.style.fontSize = size + "px";
};
}
document.getElementById("size-12").onclick = makeSizer(12);
document.getElementById("size-16").onclick = makeSizer(16);
document.getElementById("size-18").onclick = makeSizer(18);