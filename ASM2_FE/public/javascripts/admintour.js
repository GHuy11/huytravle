fetch("http://localhost:3000/tour").then(r => r.json()).then(data => {
    let str =``;
        // console.log(data);
        data.forEach(data => str+= show1touradmin(data));
        document.querySelector("#tour-admin").innerHTML=str
})

const show1touradmin = (data) =>{
    return `
    <tr>
        <td>${data.id}</td>
        <td>${data.id_loaitour}</td>
        <td>${data.ngay}</td>
        <td>${data.title}</td>
        <td>${data.price}</td>
        <td>${data.sale}</td>
        <td>${data.ngayKH}</td>
        <td>${data.noiKH}</td>
        <td>${data.thoigianKH}</td>
        <td style="width: 15%;max-height: 50px;"><img src="./public/images/${data.img}" style="width: 80%;"></td>
        <td>${data.lich_trinh}</td>
        <td>
            <button type="button"><a href='formupdate.html?id=${data.id}'><ion-icon name="construct-outline"></ion-icon></a></button> |
            <button onclick='xoatour(${data.id})' type="button"><ion-icon name="trash-outline"></ion-icon></button>
        </td>
    </tr> 
    `
}

//xóa tour 
const xoatour =(id) =>{
    let hoi = confirm(`bạn có muốn xóa không`)
    if(hoi==false) return;
    fetch(`http://localhost:3000/admin/tour/${id}`,{method:"delete"})
    .then(r => r.json()).then(data =>{
        document.location=`admintour.html`
    })
}