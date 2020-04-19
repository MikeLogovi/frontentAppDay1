var preloader= document.getElementById("pre_init");
var app =document.getElementById("app");
app.classList.add("hidden");
window.onload=()=>{
    app.classList.remove("hidden");
    preloader.classList.add("hidden");
    preloader.style.display="none";
}