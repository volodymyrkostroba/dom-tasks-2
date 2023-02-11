import images from "./img.js";

const imgRef = document.querySelector('.task-3>img');

function imgHandler(arr){
        setInterval(() =>{
            let src = Math.floor(Math.random() * arr.length);  
            imgRef.src = arr[src];  
},1000)


}
imgHandler(images);

