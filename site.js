localStorage.setItem("It's a secret to everybody.", "You got a Red Rupee!")


const hours = new Date().getHours() // get the current hour
const welcomeD = document.querySelector('#welcome')

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

if(isMorning) {
    welcomeD.textContent = 'Good Morning'
}
    else if(isAfternoon) {
        welcomeD.textContent = 'Good Afternoon'
    }
    else {
        welcomeD.textContent = 'Good Evening'
    }




const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })
    
const images = document.querySelectorAll('#carousel img')
    
let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
    }
    
    showImages() 

    currentImage = 0
    const cycle = setInterval(() =>  { 
        showImages()
        currentImage++ }, 5000)
    

    // function cycle(currentImage) {currentImage++}
    // setInterval(() => {
    //     cycle(currentImage++)}, 1000)
    // showImages()

const nextButton = document.querySelector('#next')
    nextButton.addEventListener('click', () => {
        currentImage++,
        showImages()
    })
const prevButton = document.querySelector('#prev')
    prevButton.addEventListener('click', () => {
        currentImage--,
        showImages()
    }) 

const toDos = document.querySelector('#todo-list')
const newItem = document.querySelector('#new-todo').textContent
const addButton = document.querySelector('button')

