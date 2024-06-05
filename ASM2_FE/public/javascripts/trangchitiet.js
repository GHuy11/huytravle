
const params = new URLSearchParams(location.search);
let id = params.get('id');



fetch(`http://localhost:3000/tour/${id}`).then (r => r.json()).then(data =>{
        let str = showtourdetail(data);
        document.querySelector('.tour-content').innerHTML=str;
    fetch(`http://localhost:3000/loaitour/${data.id_loaitour}/4`).then(r => r.json()).then(data => {
    let str =``;
        // console.log(data);
        data.forEach(data => str+= show1tour(data));
        document.querySelector(".list-tour").innerHTML=str
    })

});
// {/* <h1 class="title-content">${data.title}</h1> */}
//show tour liên quan
const showtourdetail = (data) =>{
    return `
        <article class="image">
            <a href="" class="imga"><img src="./public/images/${data.img}" alt="" class="main-img"></a>
            <table class="show-img">
                    <tr>
                        <td><img src="./public/images/dalat1.jpg" alt=""></td>
                        <td><img src="./public/images/dalat2.jpg" alt=""></td>
                        <td class="small-img"><img src="./public/images/dalat3.jpg" alt=""></td>
                    </tr>
                    <tr>
                        <td><img src="./public/images/dalat4.jpg" alt=""></td>
                        <td><img src="./public/images/dalat6.png" alt=""></td>
                        <td class="small-img"><img src="./public/images/dalat.jpg" alt=""></td>
                    </tr>
            </table>
        </article>
        <hr>
        <article class="list-content">
            <div class="content">
                <div>
                    <p class="title-w20r"><b><i class="bi bi-upc-scan"></i>Mã tour:</b></p>
                    <p style="font-size: 17px;">SG-HN-HA-TTT14</p>
                </div>
                <div>
                    <p class="title-w20r"><b><i class="bi bi-calendar3"></i>Khởi hành:</b></p>
                    <p>
                        <select name="" id="">
                            <option>${data.ngayKH}</option>
                            <option>05/04/2024</option>
                            <option>12/04/2024</option>
                            <option>28/04/2024</option>
                            <option>20/04/2024</option>
                        </select>
                    </p>
                </div>
                <div>
                    <p class="title-w20r"><b><i class="bi bi-alarm"></i>Lịch trinh:</b></p>
                    <p style="font-size: 17px;">${data.lich_trinh}</p>
                </div>
                <div>
                    <p class="title-w20r"><b><i class="bi bi-pin-map-fill"></i>Nơi khởi hành:</b></p>
                    <p style="font-size: 17px;">${data.noiKH}</p>
                </div>
                <div>
                    <p class="title-w20r"><b><i class="bi bi-houses"></i>Khách sạn:</b></p>
                    <p style="font-size: 17px;">${data.khachsan}</p>
                </div>
                <div>
                    <p class="title-w20r"><b><i class="bi bi-car-front"></i>Phương tiện:</b></p>
                    <p style="font-size: 17px;">${data.dichuyen}</p>
                </div>
                <div>
                    <p class="title-w20r"><b><i class="bi bi-people-fill"></i>Số người:</b></p>
                    <p style="font-size: 17px;">${data.songuoi}</p>
                </div>
            </div>
            <div class="table">
                <table>
                    <tr>
                        <th>Loại Khách</th>
                        <th>Số Lượng</th>
                        <th>Đơn Giá</th>
                        <th>Tổng Giá</th>
                    </tr>
                    <tr>
                        <td>Giá Người Lớn</td>
                        <td>
                            <input type="number" value="1" name="number" min="1" max="99" step="1">
                        </td>
                        <td>5.500.000đ</td>
                        <td>5.500.000đ</td>
                    </tr>
                    <tr>
                        <td>Giá Trẻ Em</td>
                        <td>
                            <input type="number" value="1" name="number" min="1" max="99" step="1">
                        </td>
                        <td>2.000.000đ</td>
                        <td>2.000.000đ</td>
                    </tr>
                    <tr>
                        <td>Giá Em Bé</td>
                        <td>
                            <input type="number" value="1" name="number" min="1" max="99" step="1">
                        </td>
                        <td>1.500.000đ</td>
                        <td>1.500.000đ</td>
                    </tr>
                    <tr>
                        <td colspan="2">Tổng tiên</td>
                        <td colspan="2">9.000.000đ</td>
                    </tr>
                </table>
            </div>
            <div class="btn-tour">
                <a href="" class="btn-chair"> <i class="bi bi-cast"></i>Giữ Chỗ</a>
                <a href="" class="btn-ticket"><i class="bi bi-check-circle"></i>Đặt Tour</a>
            </div>
        </article>
    
    `
}



