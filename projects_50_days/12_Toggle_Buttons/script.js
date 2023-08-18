const toggles = document.querySelectorAll('.faq-toggle')
// const dif = document.querySelectorAll('.faq')


toggles.forEach(toggle => {
    toggle.addEventListener('click',() => {
        toggle.parentNode.classList.toggle('active')
    })
})

// toggles.addEventListener('click', () => {
//     dif.classList.add('active')
// })