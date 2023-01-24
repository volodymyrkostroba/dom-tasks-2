import images from "./img.js";

const ulRef = document.querySelector('#task-1');
const imgRef = document.querySelector('.task-1__img');


images.forEach(e => {
    const itemRef = `<li><img src="${e}" alt="" width="300"></li>`;

    ulRef.insertAdjacentHTML("afterbegin",itemRef)
});

ulRef.addEventListener('click', function (e) {
    if(e.target.nodeName !== 'IMG'){
        return
    }

    imgRef.src = e.target.src;
});