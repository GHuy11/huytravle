
var hinh= [
    './public/images/slide1.jpg',
    './public/images/slide2.jpg',
    './public/images/slide3.jpg',
    './public/images/slide4.jpg',
    './public/images/slide5.jpg',
]
 var i = 0;
var t;
 function next(){
    i++;
    if (i==hinh.length -1 ) {
        i=0;
    }
    document.getElementById("banner").src=""+ hinh[i]

 }
function star(){
    t=setInterval(next,3000)
 }
 star();

 //hiển thị menu loại 1
const showmenu1= () =>{
    let str =`<li><a href="index.html">Trang chủ</a></li>`;
    fetch("http://localhost:3000/menu1").then(r => r.json()).then(data => {
        // console.log(data);
        data.forEach(data => {
            str+=`
            <li><a href="tourtheoloai.html?id=${data.id}">${data.title}</a>
                <ul class="submenu">
                    <div id="id_loai${data.id}" class="menu-2-tour" >
                    </div>
                </ul>
            </li>
            `
        });
        str+= `
            <li><a href="#">Ẩm Thực</a></li>
            <li><a href="#">Giới Thiệu</a></li> `
        document.querySelector(".main-menu").innerHTML=str;
    })  
}
showmenu1()

//hiện thị menu loại 2

const showmenu2idloai1= () =>{
    let str =``;
    fetch("http://localhost:3000/menu2/1").then(r => r.json()).then(data => {
        // console.log(data);
        data.forEach(data => {
            str+=`
            <li><a href="#"><ion-icon name="location-sharp"></ion-icon>${data.name}</a></li>
            `
        });
        document.querySelector("#id_loai1").innerHTML=str
    })
}
showmenu2idloai1()

//
const showmenu2idloai2= () =>{
    let str =``;
    fetch("http://localhost:3000/menu2/2").then(r => r.json()).then(data => {
        // console.log(data);
        data.forEach(data => {
            str+=`
            <li><a href="#"><ion-icon name="location-sharp"></ion-icon>${data.name}</a></li>
            `
        });
        document.querySelector("#id_loai2").innerHTML=str
    })
}
showmenu2idloai2()

// show tour hot
fetch("http://localhost:3000/tourhot/4").then(r => r.json()).then(data => {
    let str =``;
    // console.log(data);
    data.forEach(data => str+=show1tour(data));
    document.querySelector("#tour-hot").innerHTML=str
})
//show tour sale lớn
fetch("http://localhost:3000/toursale/4").then(r => r.json()).then(data => {
    let str =``;
    // console.log(data);
    data.forEach(data => str+=show1tour(data));
    document.querySelector("#tour-sale").innerHTML=str
})
//show trong nước
fetch("http://localhost:3000/tourtrongnuoc/8").then(r => r.json()).then(data => {
    let str =``;
        // console.log(data);
        data.forEach(data => str+= show1tour(data));
        document.querySelector("#tour-trong-nuoc").innerHTML=str
    })
const show1tour = (data) =>{
    return `
    <article>
        <div class="img">
            <img src="./public/images/${data.img}" alt="">
            <div class="discount">-${data.sale}%</div>
        </div>
        <div class="content">
            <p class="title"><b><a href="detail.html?id=${data.id}">${data.title}</a></b></p>
            <p class="noiKH">Nơi khởi hành: <b> ${data.noiKH}</b></p>
            <p class="ngayKH">Ngày khởi hành: <b> ${data.ngayKH}</b></p>
            <p class="thoigianKH">Thời gian khởi hành: <b> ${data.thoigianKH}</b></p>
            <p class="lich_trinh">Lịch trình: <b> ${data.lich_trinh}</b></p>
            <p>Giá:<b class="price">${Number(data.price).toLocaleString('vi')} ₫</b></p>
            <div class="btn-book">
                <a href="" >Đặt tour</a>
            </div>
        </div>
    </article>
    `
}



 
 