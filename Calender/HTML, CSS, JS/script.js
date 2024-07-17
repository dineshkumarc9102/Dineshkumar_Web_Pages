const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

var today = new Date()

var weeks=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"]
var months=["January","February"," March","April", "May"," June", "July", "August", "September", "October", "November","December"]

date.innerHTML= (today.getDate()<10?"0":"")+today.getDate();
day.innerHTML=weeks[today.getDay()];
month.innerHTML=months[today.getMonth()]
year.innerHTML=today.getFullYear();