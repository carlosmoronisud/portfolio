//back to top
const backToTopButton = document.querySelector('#sobe')

const backToTop = () => {
 if (window.scrollY >= 100) {
backToTopButton.classList.add('visible')
 } else {
backToTopButton.classList.remove('visible')
 }
}

window.addEventListener('scroll', function () {
 backToTop()
})