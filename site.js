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