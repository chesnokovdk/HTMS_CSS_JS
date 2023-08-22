const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating ='Satisfied'

// panel.addEventListener('click', (e) => {
ratingsContainer.addEventListener('click', (e) => {
    // console.log('click')
    // console.log(e.target)
    if (e.target.parentNode.classList.contains('rating')) {
        // console.log(e.target)
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
        // console.log(selectedRating)
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"> </i>
        <strong>Thank You!</strong>
        <br>
        <strong>FeedBack: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++){
        ratings[i].classList.remove('active')
    }
}