const addressLat = 10;
const addressLng = 20;

const positionLat = 30;
const positionLng = 40;

const distance = ((addressLat - positionLat)**2 + (addressLng - positionLng)**2)**(1/2)
console.log(distance);
