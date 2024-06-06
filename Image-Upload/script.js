let image = document.getElementById("profile");
let input = document.getElementById("input");

input.onchange = function(){
    image.src = URL.createObjectURL(input.files[0]);
}