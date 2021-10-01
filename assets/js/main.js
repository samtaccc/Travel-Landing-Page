/*---- SHOW MENU ----*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle("show-menu")
        })
    }
}

showMenu("nav-toggle", "nav-menu")

/*======================== SWIPER JS ========================*/
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 0,
})
let swiper2 = new Swiper(".mySwiper2", {
    effect: "fade",
    loop: true,

    thumbs: {
        swiper: swiper,
    },
})

/*========================= POPUP ========================= */
const btnOpenVideo = document.querySelectorAll(".islands__video-content")
const islandsPopup = document.getElementById("popup")

function popUp() {
    islandsPopup.classList.add("show-popup")
}

btnOpenVideo.forEach((b) => b.addEventListener("click", popUp))

const btnCloseVideo = document.getElementById("popup-close")

btnCloseVideo.addEventListener("click", () => {
    islandsPopup.classList.remove("show-popup")
})

/*========================= GSAP ANIMATION =============*/
const controlImg = document.querySelectorAll(".controls__img")

function scrollAnimation() {
    gsap.from(".islands__subtitle", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2,
        y: -20,
    })
    gsap.from(".islands__title", {
        opacity: 0,
        duration: 0.3,
        delay: 0.3,
        y: -20,
    })
    gsap.from(".islands__description", {
        opacity: 0,
        duration: 0.4,
        delay: 0.4,
        y: -20,
    })
    gsap.from(".islands__button", {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        y: -20,
    })
    gsap.from(".islands__video-content", {
        opacity: 0,
        duration: 0.6,
        delay: 0.6,
        y: -20,
    })

    islandsPopup.classList.remove("show-popup")
}

controlImg.forEach((c) => c.addEventListener("click", scrollAnimation))
