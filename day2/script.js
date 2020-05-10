const secondHand = document.querySelector('.hand-second');
const minuteHand = document.querySelector('.hand-minute');
const hourHand = document.querySelector('.hand-hour');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
    
    let hours = now.getHours();
    if(hours >=12) {
        hours = hours-12;
    }
    const hourDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000);
