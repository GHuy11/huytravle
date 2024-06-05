
const params = new URLSearchParams(location.search);
let id = params.get('id');

fetch(`http://localhost:3000/loaitour/${id}/8`).then(r => r.json()).then(data => {
let str =``;
    // console.log(data);
    data.forEach(data => str+= show1tour(data));
    document.querySelector(".list-tour").innerHTML=str
})



