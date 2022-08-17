const burger = document.querySelector(".nav_icon");

if (burger) {
  burger.addEventListener("click", function () {
    const navmenu = document.querySelector(".nav_left");
    console.log(navmenu);

    if (navmenu.style.transform === "translateX(-500px)") {
      navmenu.style.transform = "translateX(0px)";
    } else {
      navmenu.style.transform = "translateX(-500px)";
    }
  });
}


var loader = document.getElementById("loader");
window.addEventListener("load", reload);
function reload() {
  loader.classList.add("dispear");
}
