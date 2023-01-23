window.onscroll = () => {
    if (window.pageYOffset > img.offsetHeight) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}

const nav = document.querySelector("#home nav");
const img = document.querySelector("#home img");
