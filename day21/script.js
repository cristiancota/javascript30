const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
  (position) => {
    let myObj = {};
    myObj.accuracy = position.coords.accuracy;
    myObj.altitude = position.coords.altitude;
    myObj.altitudeAccuracy = position.coords.altitudeAccuracy;
    myObj.heading = position.coords.heading;
    myObj.latitude = position.coords.latitude;
    myObj.longitude = position.coords.longitude;
    myObj.speed = position.coords.speed;
    // console.log(JSON.stringify(myObj));
    speed.textContent = JSON.stringify(myObj);
    // speed.textContent = position.coords;
    // arrow.style.transform = `rotate(${position.coords.heading}deg)`;
  },
  (err) => {
    speed.textContent = err.message;
    console.error(err);
  }
);
