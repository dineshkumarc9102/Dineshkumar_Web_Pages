const dropArea = document.getElementById("drop");
const input = document.getElementById("input");
const imgview = document.getElementById("imgview");

input.addEventListener("change", uploadImage);

function uploadImage() {
    let imglink = URL.createObjectURL(input.files[0]);
    imgview.style.backgroundImage = `url(${imglink})`;
    imgview.textContent = "";
    imgview.style.border = "none";
    imgview.innerHTML = '';  
}

dropArea.addEventListener("dragover", function(e){
    e.preventDefault();
});

dropArea.addEventListener("drop", function(e){
    e.preventDefault();
    input.files = e.dataTransfer.files;
    uploadImage();
});
