let hrs =document.getElementById('hrs');
let min =document.getElementById('min');
let sec =document.getElementById('sec');
let date =document.getElementById('date');
let day =document.getElementById('day');

setInterval(()=>{
    let time =new Date ();

    hrs.innerHTML =(time.getHours()<10?"0":"") +time.getHours();
    min.innerHTML =(time.getMinutes()<10?"0":"") +time.getMinutes();
    sec.innerHTML =(time.getSeconds()<10?"0":"") +time.getSeconds();
},1000)

let currentdate =new Date ();

date.innerHTML =(currentdate.getDate ()<10?"0":"")+currentdate.getDate()+"-"+
                (currentdate.getMonth ()<10?"0":"")+currentdate.getMonth()+"-"+
                currentdate.getFullYear();
